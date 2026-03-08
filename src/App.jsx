import React, { useState, useEffect, useCallback, useMemo } from 'react'
import {
  LEVELS, EXAM_CATEGORIES, VOCABULARY, GRAMMAR, READING_EXERCISES,
  WRITING_EXERCISES, SPEAKING_EXERCISES, LISTENING_EXERCISES,
  DAILY_PHRASES, STUDY_PLAN
} from './data'
import './styles.css'

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
            <span className="card-hint">tap to reveal</span>
          </div>
          <div className="flashcard-back">
            <span className="card-meaning">{current.meaning}</span>
            <span className="card-example">"{current.example}"</span>
            <span className="card-hint">tap to flip back</span>
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
  const score = exercise.questions.filter((q, i) => answers[i] === q.answer).length
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
      <p className="instruction">{exercise.instruction}</p>
      <div className="reading-text">{exercise.text || exercise.transcript}</div>
      <div className="questions-section">
        {exercise.questions.map((q, i) => (
          <div key={i} className={`question ${showResults ? (answers[i] === q.answer ? 'correct' : 'incorrect') : ''}`}>
            <p className="q-text">{i + 1}. {q.q}</p>
            <div className="q-options">
              {q.options.map((opt, j) => (
                <button key={j}
                  className={`opt-btn ${answers[i] === j ? 'selected' : ''} ${showResults && j === q.answer ? 'correct-answer' : ''}`}
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

      {showSample && exercise.sampleAnswer && (
        <div className="sample-answer">
          <h4>Sample Answer</h4>
          <div className="sample-text">{exercise.sampleAnswer}</div>
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

  return (
    <div className="speaking-exercise fade-up">
      <span className="exercise-type">{exercise.type}</span>
      <h3>{exercise.title}</h3>
      <p className="instruction">{exercise.instruction}</p>

      <div className="prompt-cards">
        {exercise.promptCards.map((card, i) => (
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

      {showSample && (
        <div className="sample-answer">
          <h4>Sample Response</h4>
          <div className="sample-text">{exercise.sampleResponse}</div>
        </div>
      )}
      <div className="tips-box">
        <h4>🎤 Speaking Tips</h4>
        <p>{exercise.tips}</p>
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

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '◉' },
    { id: 'vocabulary', label: 'Wortschatz', icon: '📝' },
    { id: 'grammar', label: 'Grammatik', icon: '🔤' },
    { id: 'reading', label: 'Lesen', icon: '📖' },
    { id: 'listening', label: 'Hören', icon: '👂' },
    { id: 'writing', label: 'Schreiben', icon: '✍️' },
    { id: 'speaking', label: 'Sprechen', icon: '🗣️' },
    { id: 'phrases', label: 'Alltag', icon: '💬' },
    { id: 'plan', label: 'Study Plan', icon: '📅' },
  ]

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
          {navItems.map(item => (
            <button key={item.id}
              className={`nav-item ${page === item.id ? 'active' : ''}`}
              onClick={() => setPage(item.id)}
              title={item.label}>
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="sidebar-footer">
            <div className="sidebar-meta">Hamburg Prep</div>
            <div className="sidebar-meta">Goethe · TELC</div>
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
                  <h2>Willkommen, Merrill! 👋</h2>
                  <p>Your journey from A1 to B1 — preparing for Goethe & TELC exams and life in Hamburg.</p>
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
                  { label: 'Exam Skills', value: '6 areas', pct: null, color: '#48BB78', page: 'plan' },
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

          {/* ════ VOCABULARY ════ */}
          {page === 'vocabulary' && (
            <div className="fade-up">
              <div className="section-header">
                <div>
                  <h2>Wortschatz — {level}</h2>
                  <p className="section-desc">{vocabForLevel.length} words · Tap card to reveal meaning</p>
                </div>
                <div className="section-stats">
                  <ProgressRing progress={vocabForLevel.length ? Math.round((knownVocab/vocabForLevel.length)*100) : 0} size={64} stroke={5} color="#E8A838">
                    <span className="mini-pct">{knownVocab}</span>
                  </ProgressRing>
                </div>
              </div>
              <FlashcardDeck words={vocabForLevel} progress={progress.vocab || {}} onMark={markVocab} />

              {/* Vocabulary table */}
              <div className="vocab-table-section">
                <h3>All {level} Vocabulary</h3>
                <div className="vocab-grid">
                  {vocabForLevel.map(w => (
                    <div key={w.id} className={`vocab-row ${progress.vocab?.[w.id] ? 'known' : ''}`} onClick={() => markVocab(w.id)}>
                      <div className="vocab-word">
                        {w.article && <span className="vocab-article">{w.article}</span>}
                        <span>{w.word}</span>
                      </div>
                      <div className="vocab-meaning">{w.meaning}</div>
                      <span className="vocab-theme">{w.theme}</span>
                      <span className={`vocab-check ${progress.vocab?.[w.id] ? 'checked' : ''}`}>
                        {progress.vocab?.[w.id] ? '✓' : '○'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

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
                  <p className="section-desc">Listening comprehension with transcripts (practice reading speed for real exam prep)</p>
                </div>
              </div>
              {(LISTENING_EXERCISES[level] || []).map(ex => (
                <ReadingExercise key={ex.id} exercise={ex} progress={progress.exercises || {}} onComplete={markExercise} />
              ))}
              {!(LISTENING_EXERCISES[level] || []).length && <div className="empty-state"><p>More listening exercises coming soon for {level}!</p></div>}
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
                        <div className="phrase-de-big">{p.de}</div>
                        <div className="phrase-en-small">{p.en}</div>
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
