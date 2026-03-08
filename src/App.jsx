import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import {
  LEVELS, EXAM_CATEGORIES, VOCABULARY, GRAMMAR, READING_EXERCISES,
  WRITING_EXERCISES, SPEAKING_EXERCISES, LISTENING_EXERCISES,
  DAILY_PHRASES, STUDY_PLAN, PRONUNCIATION, GUIDED_LESSONS, numberToGerman
} from './data'
import { LID_QUESTIONS } from './lid_data'
import './styles.css'

// ─── VOICE / TTS SYSTEM ───
function useVoice() {
  const [speaking, setSpeaking] = useState(false)
  const [voices, setVoices] = useState([])
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null

  useEffect(() => {
    if (!synth) return
    const loadVoices = () => {
      const v = synth.getVoices().filter(v => v.lang.startsWith('de'))
      setVoices(v)
    }
    loadVoices()
    synth.onvoiceschanged = loadVoices
  }, [])

  const speak = useCallback((text, rate = 0.85) => {
    if (!synth) return
    synth.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    utt.lang = 'de-DE'
    utt.rate = rate
    if (voices.length) utt.voice = voices[0]
    utt.onstart = () => setSpeaking(true)
    utt.onend = () => setSpeaking(false)
    utt.onerror = () => setSpeaking(false)
    synth.speak(utt)
  }, [synth, voices])

  const stop = useCallback(() => { if (synth) { synth.cancel(); setSpeaking(false) } }, [synth])

  return { speak, stop, speaking, available: !!synth && voices.length > 0 }
}

// ─── SPEAK BUTTON COMPONENT ───
function SpeakBtn({ text, rate, className = '' }) {
  const { speak, speaking, available } = useVoice()
  if (!available) return null
  return (
    <button className={`speak-btn ${speaking ? 'active' : ''} ${className}`}
      onClick={(e) => { e.stopPropagation(); speak(text, rate || 0.85) }}
      title="Listen to pronunciation">
      {speaking ? '⏸' : '🔊'}
    </button>
  )
}

// ─── SPEECH RECOGNITION (Pronunciation Check) ───
function useSpeechRecognition() {
  const [result, setResult] = useState(null)
  const [listening, setListening] = useState(false)
  const [available, setAvailable] = useState(false)
  const recognitionRef = useRef(null)

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (SpeechRecognition) {
      setAvailable(true)
      const recognition = new SpeechRecognition()
      recognition.lang = 'de-DE'
      recognition.interimResults = false
      recognition.maxAlternatives = 3
      recognition.onresult = (event) => {
        const results = Array.from(event.results[0]).map(r => ({
          text: r.transcript.toLowerCase().trim(),
          confidence: r.confidence,
        }))
        setResult(results)
        setListening(false)
      }
      recognition.onerror = () => setListening(false)
      recognition.onend = () => setListening(false)
      recognitionRef.current = recognition
    }
  }, [])

  const listen = useCallback(() => {
    if (recognitionRef.current && !listening) {
      setResult(null)
      setListening(true)
      recognitionRef.current.start()
    }
  }, [listening])

  const stop = useCallback(() => {
    if (recognitionRef.current) { recognitionRef.current.stop(); setListening(false) }
  }, [])

  return { listen, stop, listening, result, available }
}

function PronunciationCheck({ targetText }) {
  const { listen, stop, listening, result, available } = useSpeechRecognition()
  if (!available) return null

  const target = targetText.toLowerCase().trim()
  const match = result ? result.some(r => {
    const spoken = r.text.replace(/[.,!?]/g, '')
    return spoken === target.replace(/[.,!?]/g, '') || spoken.includes(target.replace(/[.,!?]/g, ''))
  }) : null
  const bestResult = result ? result[0] : null

  return (
    <div className="pronunciation-check">
      <button className={`speak-btn ${listening ? 'active' : ''}`}
        onClick={(e) => { e.stopPropagation(); listening ? stop() : listen() }}
        title="Record your pronunciation"
        style={{ background: listening ? 'rgba(232,93,93,0.15)' : undefined, borderColor: listening ? 'var(--red)' : undefined }}>
        {listening ? '⏹' : '🎙️'}
      </button>
      {result && (
        <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: match ? 'var(--green)' : 'var(--red)', marginLeft: 8 }}>
          {match ? '✓ Great!' : `✗ "${bestResult?.text}" — try again`}
        </span>
      )}
      {listening && <span style={{ fontSize: 11, color: 'var(--text-3)', marginLeft: 8 }}>Listening...</span>}
    </div>
  )
}

// ─── SRS (Spaced Repetition System) ───
const SRS_KEY = 'deutsch-lernen-srs'
function loadSRS() { try { return JSON.parse(localStorage.getItem(SRS_KEY)) || {} } catch { return {} } }
function saveSRS(data) { localStorage.setItem(SRS_KEY, JSON.stringify(data)) }

function getSRSCard(srs, id) {
  return srs[id] || { interval: 0, ease: 2.5, nextReview: 0, reps: 0 }
}

function updateSRS(srs, id, quality) {
  // SM-2 algorithm simplified
  // quality: 0 = wrong, 1 = hard, 2 = good, 3 = easy
  const card = getSRSCard(srs, id)
  let { interval, ease, reps } = card
  const now = Date.now()

  if (quality < 1) {
    // Reset on fail
    interval = 0
    reps = 0
  } else {
    if (reps === 0) interval = 1 // 1 day
    else if (reps === 1) interval = 3 // 3 days
    else interval = Math.round(interval * ease)
    reps += 1
    ease = Math.max(1.3, ease + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02)))
  }

  return {
    ...srs,
    [id]: {
      interval,
      ease: Math.round(ease * 100) / 100,
      nextReview: now + interval * 24 * 60 * 60 * 1000,
      reps,
      lastReview: now,
    }
  }
}

function getDueCards(srs, allIds) {
  const now = Date.now()
  return allIds.filter(id => {
    const card = srs[id]
    if (!card) return true // New card = due
    return card.nextReview <= now
  })
}

// ─── SRS REVIEW COMPONENT ───
function SRSReview({ words, level }) {
  const [srs, setSrs] = useState(() => loadSRS())
  const [currentIdx, setCurrentIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [sessionDone, setSessionDone] = useState(false)

  const dueIds = useMemo(() => getDueCards(srs, words.map(w => w.id)), [srs, words])
  const dueWords = useMemo(() => words.filter(w => dueIds.includes(w.id)).slice(0, 20), [dueIds, words])

  const current = dueWords[currentIdx]

  const rate = (quality) => {
    const newSrs = updateSRS(srs, current.id, quality)
    setSrs(newSrs)
    saveSRS(newSrs)

    if (currentIdx < dueWords.length - 1) {
      setCurrentIdx(currentIdx + 1)
      setFlipped(false)
    } else {
      setSessionDone(true)
    }
  }

  if (!dueWords.length || sessionDone) {
    const reviewed = Object.keys(srs).length
    return (
      <div className="card" style={{ textAlign: 'center', padding: 40 }}>
        <span style={{ fontSize: 48 }}>🎉</span>
        <h3 style={{ fontFamily: 'var(--font-display)', marginTop: 12 }}>
          {sessionDone ? 'Session Complete!' : 'All caught up!'}
        </h3>
        <p style={{ color: 'var(--text-3)', marginTop: 8 }}>
          {sessionDone ? `Reviewed ${dueWords.length} cards. Come back later for more.` : `${reviewed} words in your SRS. No reviews due right now.`}
        </p>
        {sessionDone && <button className="primary-btn" onClick={() => { setSessionDone(false); setCurrentIdx(0) }} style={{ marginTop: 16 }}>Review Again</button>}
      </div>
    )
  }

  return (
    <div className="srs-review">
      <div className="lid-progress-bar"><div className="lid-progress-fill" style={{ width: `${((currentIdx + 1) / dueWords.length) * 100}%`, background: 'var(--green)' }} /></div>
      <div className="lid-counter">{currentIdx + 1} / {dueWords.length} due · {Object.keys(srs).length} total in SRS</div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <span className="card-theme">{current.theme}</span>
            <span className="card-word">{current.article ? `${current.article} ` : ''}{current.word}</span>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <SpeakBtn text={`${current.article || ''} ${current.word}`} rate={0.7} />
              <PronunciationCheck targetText={current.word} />
            </div>
            <span className="card-hint">tap to reveal · 🎙️ to test pronunciation</span>
          </div>
          <div className="flashcard-back">
            <span className="card-meaning">{current.meaning}</span>
            <span className="card-example">"{current.example}"</span>
            <SpeakBtn text={current.example} rate={0.75} />
            <span className="card-hint">Rate your recall:</span>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="srs-buttons">
          <button className="srs-btn srs-again" onClick={() => rate(0)}>❌ Again</button>
          <button className="srs-btn srs-hard" onClick={() => rate(1)}>😐 Hard</button>
          <button className="srs-btn srs-good" onClick={() => rate(2)}>👍 Good</button>
          <button className="srs-btn srs-easy" onClick={() => rate(3)}>⚡ Easy</button>
        </div>
      )}
    </div>
  )
}

// ─── UTILITY ───
const LS_KEY = 'deutsch-lernen-progress'
const loadProgress = () => {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {} } catch { return {} }
}
const saveProgress = (p) => localStorage.setItem(LS_KEY, JSON.stringify(p))

// ─── SMALL COMPONENTS ───
function ProgressRing({ progress, size = 80, stroke = 6, color = '#E8A838', children }) {
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (Math.min(progress, 100) / 100) * circ
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)' }} />
      </svg>
      <div className="ring-center">{children}</div>
    </div>
  )
}

function StatusBadge({ status }) {
  const map = {
    mastered: { bg: 'rgba(72,187,120,0.12)', color: '#48BB78', label: 'Mastered' },
    completed: { bg: 'rgba(72,187,120,0.12)', color: '#48BB78', label: 'Done' },
    learning: { bg: 'rgba(99,179,237,0.12)', color: '#63B3ED', label: 'Learning' },
    'in-progress': { bg: 'rgba(232,168,56,0.12)', color: '#E8A838', label: 'In Progress' },
    'not-started': { bg: 'rgba(255,255,255,0.04)', color: '#6b6560', label: 'Not Started' },
  }
  const s = map[status] || map['not-started']
  return <span className="status-badge" style={{ background: s.bg, color: s.color }}>{s.label}</span>
}

function LevelSelector({ current, onChange }) {
  return (
    <div className="level-selector">
      {LEVELS.map(l => (
        <button key={l} className={`level-btn ${current === l ? 'active' : ''}`} onClick={() => onChange(l)}>
          {l}
        </button>
      ))}
    </div>
  )
}

// ─── VOCAB FLASHCARD COMPONENT ───
function FlashcardDeck({ words, progress, onMark }) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [filter, setFilter] = useState('all') // all, unknown, known

  const filtered = useMemo(() => {
    if (filter === 'known') return words.filter(w => progress[w.id])
    if (filter === 'unknown') return words.filter(w => !progress[w.id])
    return words
  }, [words, progress, filter])

  const current = filtered[idx] || null
  const known = words.filter(w => progress[w.id]).length

  useEffect(() => { setIdx(0); setFlipped(false) }, [filter])

  if (!current) return (
    <div className="empty-state">
      <span style={{ fontSize: 48 }}>🎉</span>
      <p>No cards in this filter. {filter !== 'all' && <button className="link-btn" onClick={() => setFilter('all')}>Show all</button>}</p>
    </div>
  )

  return (
    <div className="flashcard-section">
      <div className="flashcard-controls">
        <div className="filter-pills">
          {[['all', `All (${words.length})`], ['unknown', `Learning (${words.length - known})`], ['known', `Known (${known})`]].map(([f, label]) => (
            <button key={f} className={`pill ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{label}</button>
          ))}
        </div>
        <span className="card-counter">{idx + 1} / {filtered.length}</span>
      </div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <span className="card-theme">{current.theme}</span>
            <span className="card-word">{current.article ? `${current.article} ` : ''}{current.word}</span>
            <SpeakBtn text={`${current.article || ''} ${current.word}`} />
            <span className="card-hint">tap to reveal · 🔊 to hear</span>
          </div>
          <div className="flashcard-back">
            <span className="card-meaning">{current.meaning}</span>
            <span className="card-example">"{current.example}"</span>
            <SpeakBtn text={current.example} rate={0.75} />
            <span className="card-hint">tap to flip · 🔊 to hear example</span>
          </div>
        </div>
      </div>

      <div className="flashcard-actions">
        <button className="fc-btn prev" onClick={() => { setIdx(Math.max(0, idx - 1)); setFlipped(false) }} disabled={idx === 0}>← Prev</button>
        <button className={`fc-btn mark ${progress[current.id] ? 'known' : ''}`}
          onClick={(e) => { e.stopPropagation(); onMark(current.id) }}>
          {progress[current.id] ? '✓ Known' : '○ Mark Known'}
        </button>
        <button className="fc-btn next" onClick={() => { setIdx(Math.min(filtered.length - 1, idx + 1)); setFlipped(false) }} disabled={idx >= filtered.length - 1}>Next →</button>
      </div>
    </div>
  )
}

// ─── GRAMMAR LESSON COMPONENT ───
function GrammarLesson({ lesson, progress, onComplete }) {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const checkAnswers = () => setShowResults(true)
  const score = lesson.exercises.filter((ex, i) => answers[i] === ex.answer).length
  const total = lesson.exercises.length
  const passed = score >= Math.ceil(total * 0.7)

  useEffect(() => {
    if (showResults && passed && !progress[lesson.id]) {
      onComplete(lesson.id)
    }
  }, [showResults, passed])

  return (
    <div className="grammar-lesson fade-up">
      <div className="lesson-header">
        <h3>{lesson.title}</h3>
        <p className="lesson-subtitle">{lesson.subtitle}</p>
        {progress[lesson.id] && <StatusBadge status="completed" />}
      </div>

      <div className="lesson-explanation">{lesson.explanation}</div>

      <div className="key-rules">
        <h4>Key Rules</h4>
        {lesson.keyRules.map((r, i) => (
          <div key={i} className="rule-item">
            <span className="rule-num">{i + 1}</span>
            <span>{r}</span>
          </div>
        ))}
      </div>

      <div className="exercises">
        <h4>Practice Exercises</h4>
        {lesson.exercises.map((ex, i) => (
          <div key={i} className={`exercise ${showResults ? (answers[i] === ex.answer ? 'correct' : 'incorrect') : ''}`}>
            <p className="exercise-q">{ex.q}</p>
            <div className="exercise-options">
              {ex.options.map((opt, j) => (
                <button key={j}
                  className={`opt-btn ${answers[i] === j ? 'selected' : ''} ${showResults && j === ex.answer ? 'correct-answer' : ''}`}
                  onClick={() => !showResults && setAnswers(p => ({ ...p, [i]: j }))}
                  disabled={showResults}
                >{opt}</button>
              ))}
            </div>
            {showResults && answers[i] !== ex.answer && <p className="hint">💡 {ex.hint}</p>}
          </div>
        ))}

        {!showResults ? (
          <button className="primary-btn" onClick={checkAnswers} disabled={Object.keys(answers).length < total}>
            Check Answers ({Object.keys(answers).length}/{total})
          </button>
        ) : (
          <div className={`score-card ${passed ? 'passed' : 'failed'}`}>
            <span className="score-icon">{passed ? '🎉' : '📚'}</span>
            <span className="score-text">{score}/{total} correct — {passed ? 'Great job!' : 'Review and try again!'}</span>
            {!passed && <button className="secondary-btn" onClick={() => { setAnswers({}); setShowResults(false) }}>Retry</button>}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── READING EXERCISE COMPONENT ───
function ReadingExercise({ exercise, progress, onComplete }) {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const getAns = (q) => q.answer !== undefined ? q.answer : q.ans
  const getOpts = (q) => q.options || q.opts || []
  const score = exercise.questions.filter((q, i) => answers[i] === getAns(q)).length
  const total = exercise.questions.length
  const passed = score >= Math.ceil(total * 0.7)

  useEffect(() => {
    if (showResults && passed && !progress[exercise.id]) onComplete(exercise.id)
  }, [showResults, passed])

  return (
    <div className="reading-exercise fade-up">
      <div className="exercise-meta">
        <span className="exercise-type">{exercise.type}</span>
        {progress[exercise.id] && <StatusBadge status="completed" />}
      </div>
      <h3>{exercise.title}</h3>
      {exercise.instruction && <p className="instruction">{exercise.instruction}</p>}
      <div className="reading-text">{exercise.text || exercise.transcript}</div>
      <SpeakBtn text={exercise.text || exercise.transcript} rate={0.75} />
      <div className="questions-section">
        {exercise.questions.map((q, i) => (
          <div key={i} className={`question ${showResults ? (answers[i] === getAns(q) ? 'correct' : 'incorrect') : ''}`}>
            <p className="q-text">{i + 1}. {q.q}</p>
            <div className="q-options">
              {getOpts(q).map((opt, j) => (
                <button key={j}
                  className={`opt-btn ${answers[i] === j ? 'selected' : ''} ${showResults && j === getAns(q) ? 'correct-answer' : ''}`}
                  onClick={() => !showResults && setAnswers(p => ({ ...p, [i]: j }))}
                  disabled={showResults}
                >{opt}</button>
              ))}
            </div>
          </div>
        ))}
        {!showResults ? (
          <button className="primary-btn" onClick={() => setShowResults(true)} disabled={Object.keys(answers).length < total}>
            Check Answers
          </button>
        ) : (
          <div className={`score-card ${passed ? 'passed' : 'failed'}`}>
            <span className="score-icon">{passed ? '✅' : '📖'}</span>
            <span>{score}/{total} — {passed ? 'Well done!' : 'Try again!'}</span>
            {!passed && <button className="secondary-btn" onClick={() => { setAnswers({}); setShowResults(false) }}>Retry</button>}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── LISTENING EXERCISE (listen-first, transcript hidden) ───
function ListeningExercise({ exercise, progress, onComplete }) {
  const { speak, speaking, available } = useVoice()
  const [showTranscript, setShowTranscript] = useState(false)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [hasListened, setHasListened] = useState(false)

  const getAns = (q) => q.answer !== undefined ? q.answer : q.ans
  const getOpts = (q) => q.options || q.opts || []
  const text = exercise.text || exercise.transcript || ''
  const score = exercise.questions.filter((q, i) => answers[i] === getAns(q)).length
  const total = exercise.questions.length
  const passed = score >= Math.ceil(total * 0.7)

  useEffect(() => {
    if (showResults && passed && !progress[exercise.id]) onComplete(exercise.id)
  }, [showResults, passed])

  const playAudio = () => {
    speak(text, 0.8)
    setHasListened(true)
  }

  return (
    <div className="reading-exercise fade-up">
      <div className="exercise-meta">
        <span className="exercise-type">{exercise.type}</span>
        {progress[exercise.id] && <StatusBadge status="completed" />}
      </div>
      <h3>🎧 {exercise.title}</h3>

      {/* Listen button - primary action */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', margin: '16px 0', padding: 20, background: 'rgba(159,122,234,0.06)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(159,122,234,0.15)' }}>
        <button className="primary-btn" onClick={playAudio} style={{ background: speaking ? 'var(--red)' : '#9F7AEA' }}>
          {speaking ? '⏸ Playing...' : '▶ Listen'}
        </button>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>
          {hasListened ? 'Listen again or answer the questions below' : 'Listen to the audio first, then answer questions'}
        </span>
      </div>

      {/* Transcript toggle */}
      <button className="secondary-btn" onClick={() => setShowTranscript(!showTranscript)} style={{ marginBottom: 16 }}>
        {showTranscript ? '👁️ Hide Transcript' : '📄 Show Transcript'}
      </button>
      {showTranscript && <div className="reading-text">{text}</div>}

      {/* Questions */}
      <div className="questions-section">
        {exercise.questions.map((q, i) => (
          <div key={i} className={`question ${showResults ? (answers[i] === getAns(q) ? 'correct' : 'incorrect') : ''}`}>
            <p className="q-text">{i + 1}. {q.q}</p>
            <div className="q-options">
              {getOpts(q).map((opt, j) => (
                <button key={j}
                  className={`opt-btn ${answers[i] === j ? 'selected' : ''} ${showResults && j === getAns(q) ? 'correct-answer' : ''}`}
                  onClick={() => !showResults && setAnswers(p => ({ ...p, [i]: j }))}
                  disabled={showResults}
                >{opt}</button>
              ))}
            </div>
          </div>
        ))}
        {!showResults ? (
          <button className="primary-btn" onClick={() => setShowResults(true)} disabled={Object.keys(answers).length < total}>Check Answers</button>
        ) : (
          <div className={`score-card ${passed ? 'passed' : 'failed'}`}>
            <span className="score-icon">{passed ? '✅' : '📖'}</span>
            <span>{score}/{total} — {passed ? 'Gut gemacht!' : 'Listen again and retry!'}</span>
            {!passed && <button className="secondary-btn" onClick={() => { setAnswers({}); setShowResults(false) }} style={{marginLeft:8}}>Retry</button>}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── WRITING EXERCISE COMPONENT ───
function WritingExercise({ exercise }) {
  const [text, setText] = useState('')
  const [showSample, setShowSample] = useState(false)
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="writing-exercise fade-up">
      <span className="exercise-type">{exercise.type}</span>
      <h3>{exercise.title}</h3>
      <p className="instruction">{exercise.instruction}</p>

      {exercise.fields ? (
        <div className="form-fields">
          {exercise.fields.map((f, i) => (
            <div key={i} className="form-field">
              <label>{f}</label>
              <input type="text" placeholder={`Your ${f}...`} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <textarea className="writing-area" value={text} onChange={e => setText(e.target.value)}
            placeholder="Schreiben Sie hier..." rows={8} />
          <div className="writing-footer">
            <span className="word-count">{wordCount} words</span>
            <button className="secondary-btn" onClick={() => setShowSample(!showSample)}>
              {showSample ? 'Hide' : 'Show'} Sample Answer
            </button>
          </div>
        </>
      )}

      {showSample && (exercise.sampleAnswer || exercise.sample) && (
        <div className="sample-answer">
          <h4>Sample Answer</h4>
          <div className="sample-text">{exercise.sampleAnswer || exercise.sample}</div>
        </div>
      )}
      <div className="tips-box">
        <h4>💡 Exam Tips</h4>
        <p>{exercise.tips}</p>
      </div>
    </div>
  )
}

// ─── SPEAKING EXERCISE COMPONENT ───
function SpeakingExercise({ exercise }) {
  const [showSample, setShowSample] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const cards = exercise.promptCards || exercise.cards || []
  const sampleText = exercise.sampleResponse || exercise.sample || ''

  return (
    <div className="speaking-exercise fade-up">
      <span className="exercise-type">{exercise.type}</span>
      <h3>{exercise.title}</h3>
      <p className="instruction">{exercise.instruction}</p>

      <div className="prompt-cards">
        {cards.map((card, i) => (
          <button key={i} className={`prompt-card ${activeCard === i ? 'active' : ''}`}
            onClick={() => setActiveCard(activeCard === i ? null : i)}>
            {card}
          </button>
        ))}
      </div>

      <div className="speaking-actions">
        <button className="secondary-btn" onClick={() => setShowSample(!showSample)}>
          {showSample ? 'Hide' : 'Show'} Sample Response
        </button>
      </div>

      {showSample && sampleText && (
        <div className="sample-answer">
          <h4>Sample Response</h4>
          <div className="sample-text">{sampleText}</div>
          <SpeakBtn text={sampleText} rate={0.75} />
        </div>
      )}
      <div className="tips-box">
        <h4>🎤 Speaking Tips</h4>
        <p>{exercise.tips}</p>
      </div>
    </div>
  )
}

// ─── LEBEN IN DEUTSCHLAND TEST COMPONENT ───
function LiDTest({ progress, onMark }) {
  const [mode, setMode] = useState('practice') // practice, exam
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [examQuestions, setExamQuestions] = useState([])
  const [shuffledOpts, setShuffledOpts] = useState({})

  // Generate shuffled options for each question
  const getShuffled = useCallback((q, idx) => {
    if (shuffledOpts[idx]) return shuffledOpts[idx]
    const indices = q.opts.map((_, i) => i)
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[indices[i], indices[j]] = [indices[j], indices[i]]
    }
    const shuffled = { indices, correctIdx: indices.indexOf(q.ans) }
    setShuffledOpts(prev => ({ ...prev, [idx]: shuffled }))
    return shuffled
  }, [shuffledOpts])

  const startExam = () => {
    // 33 random questions like real exam
    const shuffled = [...LID_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 33)
    setExamQuestions(shuffled)
    setAnswers({})
    setShowResult(false)
    setCurrentQ(0)
    setShuffledOpts({})
    setMode('exam')
  }

  const questions = mode === 'exam' ? examQuestions : LID_QUESTIONS
  const q = questions[currentQ]
  if (!q) return <div className="empty-state"><p>Loading questions...</p></div>

  const shuffled = getShuffled(q, currentQ)
  const examScore = mode === 'exam' && showResult
    ? questions.filter((qq, i) => {
        const s = getShuffled(qq, i)
        return answers[i] === s.correctIdx
      }).length
    : 0

  return (
    <div className="lid-section fade-up">
      <div className="lid-mode-toggle">
        <button className={`pill ${mode === 'practice' ? 'active' : ''}`}
          onClick={() => { setMode('practice'); setCurrentQ(0); setAnswers({}); setShowResult(false); setShuffledOpts({}) }}>
          Practice (All {LID_QUESTIONS.length})
        </button>
        <button className={`pill ${mode === 'exam' ? 'active' : ''}`} onClick={startExam}>
          🎯 Mock Exam (33 Fragen)
        </button>
      </div>

      {mode === 'exam' && showResult ? (
        <div className={`score-card ${examScore >= 17 ? 'passed' : 'failed'}`} style={{ marginBottom: 20 }}>
          <span className="score-icon">{examScore >= 17 ? '🎉' : '📚'}</span>
          <div>
            <div className="score-text">{examScore}/33 — {examScore >= 17 ? 'BESTANDEN! (Passed!)' : 'Nicht bestanden. 17 needed.'}</div>
            <button className="secondary-btn" style={{ marginTop: 8 }} onClick={startExam}>Try Again</button>
          </div>
        </div>
      ) : null}

      <div className="lid-progress-bar">
        <div className="lid-progress-fill" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
      </div>
      <div className="lid-counter">
        Frage {currentQ + 1} von {questions.length}
        {mode === 'exam' && <span> · {Object.keys(answers).length} beantwortet</span>}
      </div>

      <div className="lid-question-card">
        <div className="lid-q-num">Aufgabe {q.num}</div>
        <div className="lid-q-text">{q.q}</div>
        <SpeakBtn text={q.q} rate={0.8} />

        <div className="lid-options">
          {shuffled.indices.map((origIdx, displayIdx) => {
            const isSelected = answers[currentQ] === displayIdx
            const isCorrect = displayIdx === shuffled.correctIdx
            const showFeedback = answers[currentQ] !== undefined

            return (
              <button key={displayIdx}
                className={`lid-opt ${isSelected ? 'selected' : ''} ${showFeedback && isCorrect ? 'correct' : ''} ${showFeedback && isSelected && !isCorrect ? 'wrong' : ''}`}
                onClick={() => {
                  if (answers[currentQ] !== undefined) return
                  setAnswers(prev => ({ ...prev, [currentQ]: displayIdx }))
                  if (displayIdx === shuffled.correctIdx && q.num) {
                    onMark(q.num)
                  }
                }}
                disabled={answers[currentQ] !== undefined}
              >
                <span className="lid-opt-letter">{'ABCD'[displayIdx]}</span>
                <span className="lid-opt-text">{q.opts[origIdx]}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="lid-nav">
        <button className="fc-btn" onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0}>← Prev</button>
        <button className="fc-btn" onClick={() => setCurrentQ(Math.min(questions.length - 1, currentQ + 1))} disabled={currentQ >= questions.length - 1}>Next →</button>
        {mode === 'exam' && Object.keys(answers).length === questions.length && !showResult && (
          <button className="primary-btn" onClick={() => setShowResult(true)}>Ergebnis anzeigen</button>
        )}
      </div>
    </div>
  )
}

// ─── NUMBER DRILL COMPONENT ───
function NumberDrill() {
  const [range, setRange] = useState([1, 20])
  const [current, setCurrent] = useState(null)
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [mode, setMode] = useState('type') // type or listen

  const generate = useCallback(() => {
    const n = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]
    setCurrent(n)
    setInput('')
    setResult(null)
  }, [range])

  useEffect(() => { generate() }, [range])

  const check = () => {
    const correct = numberToGerman(current)
    const isCorrect = input.trim().toLowerCase() === correct.toLowerCase()
    setResult({ isCorrect, correct })
    setScore(p => ({ correct: p.correct + (isCorrect ? 1 : 0), total: p.total + 1 }))
  }

  return (
    <div className="number-drill fade-up">
      <div className="drill-range">
        {[[1,20,'1-20'],[1,100,'1-100'],[1,1000,'1-1000']].map(([min,max,label]) => (
          <button key={label} className={`pill ${range[0]===min&&range[1]===max?'active':''}`}
            onClick={() => { setRange([min,max]); setScore({correct:0,total:0}) }}>{label}</button>
        ))}
        <span className="card-counter">{score.correct}/{score.total} correct</span>
      </div>

      {current !== null && (
        <div className="drill-card">
          <div className="drill-number">{current}</div>
          <SpeakBtn text={numberToGerman(current)} rate={0.7} />
          <input className="drill-input" value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && check()}
            placeholder="Type the German word..." autoFocus disabled={result !== null} />
          {!result ? (
            <button className="primary-btn" onClick={check} disabled={!input.trim()}>Check</button>
          ) : (
            <div className={`score-card ${result.isCorrect ? 'passed' : 'failed'}`}>
              <span className="score-icon">{result.isCorrect ? '✅' : '❌'}</span>
              <div>
                <span>{result.isCorrect ? 'Richtig!' : `${result.correct}`}</span>
                <button className="secondary-btn" style={{marginLeft:12}} onClick={generate}>Next →</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── GUIDED LESSON COMPONENT ───
function GuidedLessonView({ lesson, onComplete }) {
  const [step, setStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [showQuizResults, setShowQuizResults] = useState(false)
  const current = lesson.steps[step]
  const isLast = step === lesson.steps.length - 1

  return (
    <div className="guided-lesson fade-up">
      <div className="lid-progress-bar">
        <div className="lid-progress-fill" style={{ width: `${((step + 1) / lesson.steps.length) * 100}%`, background: 'var(--green)' }} />
      </div>
      <div className="lid-counter">Step {step + 1} of {lesson.steps.length}</div>

      {current.type === 'info' && (
        <div className="lesson-info-card">
          <div style={{ whiteSpace: 'pre-wrap', fontSize: 14, lineHeight: 1.8, color: 'var(--text-2)' }}>{current.content}</div>
        </div>
      )}

      {current.type === 'vocab' && (
        <div className="lesson-vocab-grid">
          <h4>Learn these words:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, marginTop: 12 }}>
            {current.wordIds.map(id => {
              const allVocab = [...(VOCABULARY.A1||[]), ...(VOCABULARY.A2||[]), ...(VOCABULARY.B1||[])]
              const w = allVocab.find(v => v.id === id)
              if (!w) return null
              return (
                <div key={id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{w.article ? `${w.article} ` : ''}{w.word}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{w.meaning}</div>
                  </div>
                  <SpeakBtn text={`${w.article || ''} ${w.word}`} rate={0.7} />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {current.type === 'quiz' && (
        <div className="lesson-quiz">
          <h4>Quick Quiz</h4>
          {current.questions.map((q, i) => (
            <div key={i} className={`exercise ${showQuizResults ? (quizAnswers[i] === q.ans ? 'correct' : 'incorrect') : ''}`} style={{ marginTop: 12 }}>
              <p className="exercise-q">{q.q}</p>
              <div className="exercise-options">
                {q.opts.map((o, j) => (
                  <button key={j} className={`opt-btn ${quizAnswers[i]===j?'selected':''} ${showQuizResults&&j===q.ans?'correct-answer':''}`}
                    onClick={() => !showQuizResults && setQuizAnswers(p => ({...p,[i]:j}))}
                    disabled={showQuizResults}>{o}</button>
                ))}
              </div>
            </div>
          ))}
          {!showQuizResults && (
            <button className="primary-btn" onClick={() => setShowQuizResults(true)}
              disabled={Object.keys(quizAnswers).length < current.questions.length}>Check Answers</button>
          )}
          {showQuizResults && (
            <div className="score-card passed" style={{marginTop:12}}>
              <span className="score-icon">🎉</span>
              <span>{current.questions.filter((q,i) => quizAnswers[i]===q.ans).length}/{current.questions.length} correct</span>
            </div>
          )}
        </div>
      )}

      {current.type === 'drill' && <NumberDrill />}

      <div className="lid-nav" style={{ marginTop: 20 }}>
        <button className="fc-btn" onClick={() => { setStep(Math.max(0, step-1)); setShowQuizResults(false); setQuizAnswers({}) }} disabled={step === 0}>← Back</button>
        {!isLast ? (
          <button className="fc-btn" onClick={() => { setStep(step+1); setShowQuizResults(false); setQuizAnswers({}) }}>Next →</button>
        ) : (
          <button className="primary-btn" onClick={() => onComplete(lesson.id)}>✅ Complete Lesson</button>
        )}
      </div>
    </div>
  )
}

// ─── DAILY PRACTICE COMPONENT ───
function DailyPractice({ level, vocabProgress, markVocab }) {
  const [done, setDone] = useState({ vocab: false, grammar: false })
  const vocab = VOCABULARY[level] || []
  const unknownVocab = vocab.filter(w => !vocabProgress?.[w.id])
  const todaysWords = useMemo(() => unknownVocab.sort(() => Math.random() - 0.5).slice(0, 10), [level])

  return (
    <div className="daily-practice fade-up">
      <div className="lid-info-card" style={{ background: 'rgba(72,187,120,0.06)', borderColor: 'rgba(72,187,120,0.2)' }}>
        <h4 style={{ color: 'var(--green)' }}>🎯 Today's Goal</h4>
        <p>Learn <strong>10 new words</strong> + review <strong>1 grammar topic</strong>. Small daily practice beats marathon sessions.</p>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3>📝 Today's 10 Words ({level})</h3>
        <p className="card-desc">{todaysWords.length} words to learn. Tap 🔊 to hear, tap row to mark known.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 12 }}>
          {todaysWords.map(w => (
            <div key={w.id} className={`vocab-row ${vocabProgress?.[w.id] ? 'known' : ''}`} onClick={() => markVocab(w.id)}>
              <div className="vocab-word">{w.article && <span className="vocab-article">{w.article}</span>}{w.word}</div>
              <div className="vocab-meaning">{w.meaning}</div>
              <span className="vocab-theme">{w.theme}</span>
              <SpeakBtn text={`${w.article || ''} ${w.word}`} rate={0.75} />
            </div>
          ))}
        </div>
        {todaysWords.length === 0 && <p style={{ color: 'var(--green)', marginTop: 12 }}>🎉 You know all {level} vocabulary! Move to the next level.</p>}
      </div>
    </div>
  )
}

// ─── MAIN APP ───
export default function App() {
  const [page, setPage] = useState('dashboard')
  const [level, setLevel] = useState('A1')
  const [progress, setProgress] = useState(() => loadProgress())
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [grammarIdx, setGrammarIdx] = useState(0)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [vocabThemeFilter, setVocabThemeFilter] = useState('all')

  useEffect(() => { setTimeout(() => setMounted(true), 50) }, [])
  useEffect(() => { saveProgress(progress) }, [progress])

  const markVocab = useCallback((id) => {
    setProgress(p => {
      const next = { ...p, vocab: { ...p.vocab, [id]: !p.vocab?.[id] } }
      return next
    })
  }, [])

  const markGrammar = useCallback((id) => {
    setProgress(p => ({ ...p, grammar: { ...p.grammar, [id]: true } }))
  }, [])

  const markExercise = useCallback((id) => {
    setProgress(p => ({ ...p, exercises: { ...p.exercises, [id]: true } }))
  }, [])

  const markLiD = useCallback((num) => {
    setProgress(p => ({ ...p, lid: { ...p.lid, [num]: true } }))
  }, [])

  // Stats
  const vocabForLevel = VOCABULARY[level] || []
  const knownVocab = vocabForLevel.filter(w => progress.vocab?.[w.id]).length
  const grammarForLevel = GRAMMAR[level] || []
  const completedGrammar = grammarForLevel.filter(g => progress.grammar?.[g.id]).length
  const allExercises = [
    ...(READING_EXERCISES[level] || []),
    ...(LISTENING_EXERCISES[level] || []),
  ]
  const completedExercises = allExercises.filter(e => progress.exercises?.[e.id]).length
  const lidCompleted = Object.keys(progress.lid || {}).length

  const navGroups = [
    { label: null, items: [
      { id: 'dashboard', label: 'Dashboard', icon: '◉' },
    ]},
    { label: 'LEARN', items: [
      { id: 'daily', label: 'Daily Practice', icon: '🎯' },
      { id: 'srs', label: 'SRS Review', icon: '🧠' },
      { id: 'lessons', label: 'Lessons', icon: '📚' },
      { id: 'alphabet', label: 'Alphabet', icon: '🔤' },
      { id: 'numbers', label: 'Zahlen', icon: '🔢' },
    ]},
    { label: 'PRACTICE', items: [
      { id: 'vocabulary', label: 'Wortschatz', icon: '📝' },
      { id: 'grammar', label: 'Grammatik', icon: '📐' },
    ]},
    { label: 'EXAM PREP', items: [
      { id: 'reading', label: 'Lesen', icon: '📖' },
      { id: 'listening', label: 'Hören', icon: '👂' },
      { id: 'writing', label: 'Schreiben', icon: '✍️' },
      { id: 'speaking', label: 'Sprechen', icon: '🗣️' },
      { id: 'lid', label: 'Einbürgerung', icon: '🏛️' },
    ]},
    { label: 'REFERENCE', items: [
      { id: 'phrases', label: 'Alltag', icon: '💬' },
      { id: 'plan', label: 'Study Plan', icon: '📅' },
    ]},
  ]
  const navItems = navGroups.flatMap(g => g.items)

  // Streak calculation
  const today = new Date().toISOString().slice(0, 10)
  const streakData = progress.streak || { lastDate: null, count: 0 }

  const recordActivity = useCallback(() => {
    setProgress(p => {
      const today = new Date().toISOString().slice(0, 10)
      const s = p.streak || { lastDate: null, count: 0 }
      if (s.lastDate === today) return p
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
      const newCount = s.lastDate === yesterday ? s.count + 1 : 1
      return { ...p, streak: { lastDate: today, count: newCount } }
    })
  }, [])

  // Record activity on any learning action
  useEffect(() => {
    const total = Object.keys(progress.vocab || {}).length + Object.keys(progress.grammar || {}).length + Object.keys(progress.exercises || {}).length
    if (total > 0) recordActivity()
  }, [progress.vocab, progress.grammar, progress.exercises])

  // Smart CTA for dashboard
  const getSmartCTA = () => {
    const srsData = loadSRS()
    const dueCount = getDueCards(srsData, vocabForLevel.map(w => w.id)).length
    const lessonsCompleted = Object.keys(progress.lessons || {}).length
    const nextLesson = GUIDED_LESSONS[lessonsCompleted]
    
    if (lessonsCompleted === 0) return { text: '🚀 Start Here — Lesson 1: Hallo!', page: 'lessons' }
    if (dueCount > 5) return { text: `🧠 ${dueCount} SRS cards due — Review now`, page: 'srs' }
    if (nextLesson) return { text: `📚 Continue: ${nextLesson.title}`, page: 'lessons' }
    return { text: '🎯 Daily Practice', page: 'daily' }
  }

  return (
    <div className={`app ${mounted ? 'mounted' : ''}`}>
      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-flag">🇩🇪</span>
            {sidebarOpen && <span className="logo-text">Deutsch Lernen</span>}
          </div>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? '◂' : '▸'}
          </button>
        </div>

        {sidebarOpen && (
          <div className="sidebar-level">
            <LevelSelector current={level} onChange={setLevel} />
          </div>
        )}

        <nav className="sidebar-nav">
          {navGroups.map((group, gi) => (
            <div key={gi}>
              {group.label && sidebarOpen && (
                <div className="nav-group-label">{group.label}</div>
              )}
              {group.items.map(item => (
                <button key={item.id}
                  className={`nav-item ${page === item.id ? 'active' : ''}`}
                  onClick={() => setPage(item.id)}
                  title={item.label}>
                  <span className="nav-icon">{item.icon}</span>
                  {sidebarOpen && <span className="nav-label">{item.label}</span>}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="sidebar-footer">
            {streakData.count > 0 && (
              <div className="streak-badge">🔥 {streakData.count} day streak</div>
            )}
            <div className="sidebar-meta">Hamburg Prep · Goethe · TELC</div>
            <button className="reset-btn" onClick={() => {
              if (window.confirm('Reset ALL progress? This cannot be undone.')) {
                localStorage.removeItem(LS_KEY)
                localStorage.removeItem(SRS_KEY)
                setProgress({})
                window.location.reload()
              }
            }}>Reset Progress</button>
          </div>
        )}
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="top-bar">
          <div className="top-bar-left">
            <h1 className="page-title">
              {navItems.find(n => n.id === page)?.icon} {navItems.find(n => n.id === page)?.label}
            </h1>
            <span className="level-badge">{level}</span>
          </div>
          <div className="top-bar-right">
            <LevelSelector current={level} onChange={setLevel} />
          </div>
        </header>

        <div className="content-area">
          {/* ════ DASHBOARD ════ */}
          {page === 'dashboard' && (
            <div className="dashboard fade-up">
              <div className="welcome-card">
                <div className="welcome-text">
                  <h2>Willkommen, Merrill! {streakData.count > 0 ? `🔥 ${streakData.count} day streak` : '👋'}</h2>
                  <p>Your journey from A1 to B1 — preparing for Goethe & TELC exams and life in Hamburg.</p>
                  <button className="primary-btn" style={{ marginTop: 12 }} onClick={() => setPage(getSmartCTA().page)}>
                    {getSmartCTA().text}
                  </button>
                </div>
                <div className="welcome-level">
                  <ProgressRing progress={Math.round(((knownVocab + completedGrammar + completedExercises) / Math.max(1, vocabForLevel.length + grammarForLevel.length + allExercises.length)) * 100)} size={100} color="#E8A838">
                    <div className="ring-label">
                      <span className="ring-pct">{Math.round(((knownVocab + completedGrammar + completedExercises) / Math.max(1, vocabForLevel.length + grammarForLevel.length + allExercises.length)) * 100)}%</span>
                      <span className="ring-sub">{level}</span>
                    </div>
                  </ProgressRing>
                </div>
              </div>

              <div className="stats-grid">
                {[
                  { label: 'Vocabulary', value: `${knownVocab}/${vocabForLevel.length}`, pct: vocabForLevel.length ? Math.round((knownVocab/vocabForLevel.length)*100) : 0, color: '#E8A838', page: 'vocabulary' },
                  { label: 'Grammar', value: `${completedGrammar}/${grammarForLevel.length}`, pct: grammarForLevel.length ? Math.round((completedGrammar/grammarForLevel.length)*100) : 0, color: '#FC8181', page: 'grammar' },
                  { label: 'Exercises', value: `${completedExercises}/${allExercises.length}`, pct: allExercises.length ? Math.round((completedExercises/allExercises.length)*100) : 0, color: '#63B3ED', page: 'reading' },
                  { label: 'Einbürgerung', value: `${lidCompleted}/${LID_QUESTIONS.length}`, pct: LID_QUESTIONS.length ? Math.round((lidCompleted/LID_QUESTIONS.length)*100) : 0, color: '#9F7AEA', page: 'lid' },
                ].map((s, i) => (
                  <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.08}s` }} onClick={() => setPage(s.page)}>
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
                    {s.pct !== null && (
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="dashboard-grid">
                <div className="card">
                  <h3>📚 Exam Categories</h3>
                  <p className="card-desc">Goethe & TELC exams test 4 skills plus vocabulary and grammar</p>
                  <div className="exam-cats">
                    {EXAM_CATEGORIES.map(cat => (
                      <button key={cat.id} className="exam-cat-btn" onClick={() => {
                        const pageMap = { lesen: 'reading', hoeren: 'listening', schreiben: 'writing', sprechen: 'speaking', wortschatz: 'vocabulary', grammatik: 'grammar' }
                        setPage(pageMap[cat.id])
                      }}>
                        <span className="cat-icon">{cat.icon}</span>
                        <span className="cat-name">{cat.name}</span>
                        <span className="cat-name-en">{cat.nameEn}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h3>🗓️ Study Plan — {level}</h3>
                  <p className="card-desc">{STUDY_PLAN[level]?.duration} · {STUDY_PLAN[level]?.hoursPerWeek}h/week</p>
                  <div className="plan-timeline">
                    {STUDY_PLAN[level]?.milestones.slice(0, 4).map((m, i) => (
                      <div key={i} className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                          <span className="timeline-week">Week {m.week}</span>
                          <span className="timeline-focus">{m.focus.slice(0, 60)}...</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="link-btn" onClick={() => setPage('plan')}>View full plan →</button>
                </div>
              </div>

              <div className="card">
                <h3>💬 Quick Phrases — Hamburg Life</h3>
                <div className="phrases-preview">
                  {Object.entries(DAILY_PHRASES).slice(0, 3).map(([cat, phrases]) => (
                    <div key={cat} className="phrase-group">
                      <span className="phrase-cat">{cat}</span>
                      {phrases.slice(0, 2).map((p, i) => (
                        <div key={i} className="phrase-row">
                          <span className="phrase-de">{p.de}</span>
                          <span className="phrase-en">{p.en}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <button className="link-btn" onClick={() => setPage('phrases')}>See all phrases →</button>
              </div>
            </div>
          )}

          {/* ════ DAILY PRACTICE ════ */}
          {page === 'daily' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>🎯 Daily Practice</h2>
                  <p className="section-desc">10 words + focused review. Small daily effort = big results.</p>
                </div>
              </div>
              <DailyPractice level={level} vocabProgress={progress.vocab} markVocab={markVocab} />
            </div>
          )}

          {/* ════ SRS REVIEW ════ */}
          {page === 'srs' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>🧠 Spaced Repetition Review</h2>
                  <p className="section-desc">Anki-style review — words you struggle with appear more often. Rate each card to optimize your learning.</p>
                </div>
              </div>
              <div className="lid-info-card" style={{ background: 'rgba(72,187,120,0.06)', borderColor: 'rgba(72,187,120,0.2)', marginBottom: 20 }}>
                <h4 style={{ color: 'var(--green)' }}>How SRS works</h4>
                <p>Flip each card, then rate your recall. <strong>Again</strong> = review immediately. <strong>Hard</strong> = review in 1 day. <strong>Good</strong> = review in 3+ days. <strong>Easy</strong> = review in 7+ days. The system automatically schedules reviews at the optimal time for your memory.</p>
              </div>
              <SRSReview words={vocabForLevel} level={level} />
            </div>
          )}

          {/* ════ GUIDED LESSONS ════ */}
          {page === 'lessons' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>📚 Guided Lessons</h2>
                  <p className="section-desc">Step-by-step learning path — start from Lesson 1 and progress naturally</p>
                </div>
              </div>
              {!selectedLesson ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {GUIDED_LESSONS.map((lesson, i) => {
                    const completed = progress.lessons?.[lesson.id]
                    const locked = i > 0 && !progress.lessons?.[GUIDED_LESSONS[i-1].id]
                    return (
                      <div key={lesson.id}
                        className={`vocab-row ${completed ? 'known' : ''}`}
                        style={{ opacity: locked ? 0.4 : 1, cursor: locked ? 'default' : 'pointer' }}
                        onClick={() => !locked && setSelectedLesson(lesson)}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
                          <span style={{
                            width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: completed ? 'var(--green-dim)' : locked ? 'rgba(255,255,255,0.03)' : 'var(--accent-dim)',
                            color: completed ? 'var(--green)' : locked ? 'var(--text-3)' : 'var(--accent)',
                            fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, flexShrink: 0,
                          }}>{completed ? '✓' : locked ? '🔒' : i + 1}</span>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: 14 }}>{lesson.title}</div>
                            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{lesson.desc}</div>
                          </div>
                        </div>
                        <StatusBadge status={completed ? 'completed' : locked ? 'not-started' : 'in-progress'} />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div>
                  <button className="secondary-btn" onClick={() => setSelectedLesson(null)} style={{ marginBottom: 16 }}>← Back to all lessons</button>
                  <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: 4 }}>{selectedLesson.title}</h3>
                  <p className="section-desc" style={{ marginBottom: 16 }}>{selectedLesson.desc}</p>
                  <GuidedLessonView lesson={selectedLesson} onComplete={(id) => {
                    setProgress(p => ({ ...p, lessons: { ...p.lessons, [id]: true } }))
                    setSelectedLesson(null)
                  }} />
                </div>
              )}
            </div>
          )}

          {/* ════ NUMBERS DRILL ════ */}
          {page === 'numbers' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>🔢 Zahlen — Number Drill</h2>
                  <p className="section-desc">Practice typing German numbers. Essential for prices, addresses, phone numbers, and time.</p>
                </div>
              </div>
              <div className="lid-info-card" style={{ background: 'rgba(232,168,56,0.06)', borderColor: 'rgba(232,168,56,0.2)', marginBottom: 20 }}>
                <h4 style={{ color: 'var(--accent)' }}>How German numbers work</h4>
                <p>German reverses two-digit numbers: <strong>25 = fünfundzwanzig</strong> (five-and-twenty). Think of it as "ones-und-tens". Above 100, it's straightforward: <strong>342 = dreihundertzweiundvierzig</strong>.</p>
              </div>
              <NumberDrill />
            </div>
          )}

          {/* ════ ALPHABET & PRONUNCIATION ════ */}
          {page === 'alphabet' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Das Alphabet & Aussprache</h2>
                  <p className="section-desc">Start here — learn German sounds, special characters, and pronunciation rules. Tap 🔊 to hear each sound.</p>
                </div>
              </div>

              <div className="card" style={{ marginBottom: 20 }}>
                <h3>🔤 German Alphabet</h3>
                <p className="card-desc">26 letters + 4 special characters. Tap any letter to hear it.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
                  {PRONUNCIATION.alphabet.map((a, i) => (
                    <div key={i} style={{
                      background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
                      padding: '12px', display: 'flex', alignItems: 'center', gap: 10,
                      transition: 'all 0.2s', cursor: 'pointer',
                    }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, minWidth: 40 }}>{a.letter.split(' ')[0]}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, color: 'var(--text-2)' }}>{a.sound}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>{a.example}</div>
                      </div>
                      <SpeakBtn text={a.letter.split(' ')[0]} rate={0.6} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ marginBottom: 20, borderLeft: '3px solid var(--accent)' }}>
                <h3>✨ Special Characters (Umlaute & Eszett)</h3>
                <p className="card-desc">These don't exist in English — they're essential for German pronunciation.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
                  {PRONUNCIATION.special.map((s, i) => (
                    <div key={i} style={{
                      background: 'var(--accent-dim)', border: '1px solid rgba(232,168,56,0.15)',
                      borderRadius: 'var(--radius-sm)', padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: 14,
                    }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, minWidth: 50, color: 'var(--accent)' }}>{s.letter.split(' ')[0]}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Sounds like: {s.sound}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 4 }}>Examples: {s.example}</div>
                        <div style={{ fontSize: 12, color: 'var(--accent)', fontStyle: 'italic' }}>💡 {s.tip}</div>
                      </div>
                      <SpeakBtn text={s.example.split(',')[0]} rate={0.6} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3>📏 Key Pronunciation Rules</h3>
                <p className="card-desc">Master these and you'll sound 80% more natural</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
                  {PRONUNCIATION.rules.map((r, i) => (
                    <div key={i} style={{
                      background: 'var(--card)', border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)', padding: '14px 18px',
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                    }}>
                      <span style={{
                        width: 28, height: 28, borderRadius: '50%', background: 'var(--accent-dim)',
                        color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>{i + 1}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>{r.rule}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{r.example}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>{r.note}</div>
                      </div>
                      <SpeakBtn text={r.example.split('=')[0].trim().split(',')[0]} rate={0.6} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════ VOCABULARY ════ */}
          {page === 'vocabulary' && (() => {
            const themes = [...new Set(vocabForLevel.map(w => w.theme))]
            const filteredVocab = vocabThemeFilter === 'all' ? vocabForLevel : vocabForLevel.filter(w => w.theme === vocabThemeFilter)
            return (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Wortschatz — {level}</h2>
                  <p className="section-desc">{vocabForLevel.length} words · {knownVocab} known · Tap card to reveal</p>
                </div>
                <div className="section-stats">
                  <ProgressRing progress={vocabForLevel.length ? Math.round((knownVocab/vocabForLevel.length)*100) : 0} size={64} stroke={5} color="#E8A838">
                    <span className="mini-pct">{knownVocab}</span>
                  </ProgressRing>
                </div>
              </div>

              {/* Theme filter */}
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 20 }}>
                <button className={`pill ${vocabThemeFilter==='all'?'active':''}`} onClick={() => setVocabThemeFilter('all')}>All ({vocabForLevel.length})</button>
                {themes.map(t => (
                  <button key={t} className={`pill ${vocabThemeFilter===t?'active':''}`} onClick={() => setVocabThemeFilter(t)}>
                    {t} ({vocabForLevel.filter(w => w.theme === t).length})
                  </button>
                ))}
              </div>

              <FlashcardDeck words={filteredVocab} progress={progress.vocab || {}} onMark={markVocab} />

              {/* Vocabulary table */}
              <div className="vocab-table-section">
                <h3>{vocabThemeFilter === 'all' ? `All ${level}` : vocabThemeFilter} Vocabulary</h3>
                <div className="vocab-grid">
                  {filteredVocab.map(w => (
                    <div key={w.id} className={`vocab-row ${progress.vocab?.[w.id] ? 'known' : ''}`} onClick={() => markVocab(w.id)}>
                      <div className="vocab-word">
                        {w.article && <span className="vocab-article">{w.article}</span>}
                        <span>{w.word}</span>
                      </div>
                      <div className="vocab-meaning">{w.meaning}</div>
                      <span className="vocab-theme">{w.theme}</span>
                      <SpeakBtn text={`${w.article || ''} ${w.word}`} rate={0.75} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )
          })()}

          {/* ════ GRAMMAR ════ */}
          {page === 'grammar' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Grammatik — {level}</h2>
                  <p className="section-desc">{grammarForLevel.length} topics · Complete exercises to master each topic</p>
                </div>
              </div>
              <div className="grammar-nav">
                {grammarForLevel.map((g, i) => (
                  <button key={g.id} className={`grammar-tab ${grammarIdx === i ? 'active' : ''}`} onClick={() => setGrammarIdx(i)}>
                    <span className="grammar-tab-num">{i + 1}</span>
                    <span className="grammar-tab-title">{g.title}</span>
                    {progress.grammar?.[g.id] && <span className="grammar-tab-check">✓</span>}
                  </button>
                ))}
              </div>
              {grammarForLevel[grammarIdx] && (
                <GrammarLesson lesson={grammarForLevel[grammarIdx]} progress={progress.grammar || {}} onComplete={markGrammar} />
              )}
            </div>
          )}

          {/* ════ READING ════ */}
          {page === 'reading' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Lesen — {level}</h2>
                  <p className="section-desc">Reading comprehension exercises in Goethe/TELC exam format</p>
                </div>
              </div>
              {(READING_EXERCISES[level] || []).map(ex => (
                <ReadingExercise key={ex.id} exercise={ex} progress={progress.exercises || {}} onComplete={markExercise} />
              ))}
              {!(READING_EXERCISES[level] || []).length && <div className="empty-state"><p>More reading exercises coming soon for {level}!</p></div>}
            </div>
          )}

          {/* ════ LISTENING ════ */}
          {page === 'listening' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Hören — {level}</h2>
                  <p className="section-desc">Listen first, then answer. Tap 🔊 to hear the text read aloud before reading the transcript.</p>
                </div>
              </div>
              {(LISTENING_EXERCISES[level] || []).map(ex => (
                <ListeningExercise key={ex.id} exercise={ex} progress={progress.exercises || {}} onComplete={markExercise} />
              ))}
              {!(LISTENING_EXERCISES[level] || []).length && <div className="empty-state"><p>More listening exercises coming for {level}!</p></div>}
            </div>
          )}

          {/* ════ WRITING ════ */}
          {page === 'writing' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Schreiben — {level}</h2>
                  <p className="section-desc">Writing exercises in Goethe/TELC format with sample answers</p>
                </div>
              </div>
              {(WRITING_EXERCISES[level] || []).map(ex => (
                <WritingExercise key={ex.id} exercise={ex} />
              ))}
            </div>
          )}

          {/* ════ SPEAKING ════ */}
          {page === 'speaking' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Sprechen — {level}</h2>
                  <p className="section-desc">Speaking prompts and structures for Goethe/TELC oral exams</p>
                </div>
              </div>
              {(SPEAKING_EXERCISES[level] || []).map(ex => (
                <SpeakingExercise key={ex.id} exercise={ex} />
              ))}
            </div>
          )}

          {/* ════ LEBEN IN DEUTSCHLAND ════ */}
          {page === 'lid' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Leben in Deutschland / Einbürgerungstest</h2>
                  <p className="section-desc">{LID_QUESTIONS.length} official BAMF questions · 33-question mock exam · {lidCompleted} answered correctly</p>
                </div>
                <ProgressRing progress={LID_QUESTIONS.length ? Math.round((lidCompleted / LID_QUESTIONS.length) * 100) : 0} size={64} stroke={5} color="#9F7AEA">
                  <span className="mini-pct">{lidCompleted}</span>
                </ProgressRing>
              </div>
              <div className="lid-info-card">
                <h4>About the Test</h4>
                <p>The Leben in Deutschland test has <strong>33 questions</strong> from a pool of 300+ questions. You need <strong>17 correct</strong> to pass. 
                Topics: democracy, history, rights, values, and daily life in Germany. Required for permanent residence and citizenship.</p>
              </div>
              <LiDTest progress={progress.lid || {}} onMark={markLiD} />
            </div>
          )}

          {/* ════ DAILY PHRASES ════ */}
          {page === 'phrases' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Alltag in Deutschland</h2>
                  <p className="section-desc">Essential phrases for daily life, bureaucracy, work, and Hamburg</p>
                </div>
              </div>
              {Object.entries(DAILY_PHRASES).map(([cat, phrases]) => (
                <div key={cat} className="phrase-section">
                  <h3 className="phrase-section-title">{cat}</h3>
                  <div className="phrase-cards">
                    {phrases.map((p, i) => (
                      <div key={i} className="phrase-card">
                        <div style={{ flex: 1 }}>
                          <div className="phrase-de-big">{p.de}</div>
                          <div className="phrase-en-small">{p.en}</div>
                        </div>
                        <SpeakBtn text={p.de} rate={0.8} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ════ STUDY PLAN ════ */}
          {page === 'plan' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Study Plan</h2>
                  <p className="section-desc">Structured roadmap from A1 to B1 — aligned with Goethe & TELC exam timelines</p>
                </div>
              </div>
              {LEVELS.map(l => (
                <div key={l} className="plan-section">
                  <div className="plan-level-header">
                    <span className={`plan-level-badge ${l === level ? 'current' : ''}`}>{l}</span>
                    <span className="plan-duration">{STUDY_PLAN[l].duration} · {STUDY_PLAN[l].hoursPerWeek}h/week</span>
                  </div>
                  <div className="plan-milestones">
                    {STUDY_PLAN[l].milestones.map((m, i) => (
                      <div key={i} className="milestone">
                        <div className="milestone-left">
                          <div className="milestone-dot" />
                          {i < STUDY_PLAN[l].milestones.length - 1 && <div className="milestone-line" />}
                        </div>
                        <div className="milestone-content">
                          <div className="milestone-week">Week {m.week}</div>
                          <div className="milestone-focus">{m.focus}</div>
                          <div className="milestone-exam">🎯 {m.exam}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
