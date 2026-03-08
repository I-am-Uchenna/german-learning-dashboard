// ═══════════════════════════════════════════════════════════════
// COMPLETE GERMAN A1→B1 CURRICULUM DATA
// Aligned to Goethe-Institut & TELC exam standards
// Categories: Lesen, Hören, Schreiben, Sprechen + Wortschatz + Grammatik
// ═══════════════════════════════════════════════════════════════

export const LEVELS = ['A1', 'A2', 'B1'];

export const EXAM_CATEGORIES = [
  { id: 'lesen', name: 'Lesen', nameEn: 'Reading', icon: '📖', color: '#63B3ED' },
  { id: 'hoeren', name: 'Hören', nameEn: 'Listening', icon: '👂', color: '#9F7AEA' },
  { id: 'schreiben', name: 'Schreiben', nameEn: 'Writing', icon: '✍️', color: '#48BB78' },
  { id: 'sprechen', name: 'Sprechen', nameEn: 'Speaking', icon: '🗣️', color: '#ED8936' },
  { id: 'wortschatz', name: 'Wortschatz', nameEn: 'Vocabulary', icon: '📝', color: '#E8A838' },
  { id: 'grammatik', name: 'Grammatik', nameEn: 'Grammar', icon: '🔤', color: '#FC8181' },
];

// ─── VOCABULARY BY THEME AND LEVEL ───
import { VOCAB_A1, VOCAB_A2, VOCAB_B1 } from './data/vocab'
export const VOCABULARY = {
  A1: VOCAB_A1,
  A2: VOCAB_A2,
  B1: VOCAB_B1,
};

// ─── PRONUNCIATION GUIDE (Day 1 essential) ───
export const PRONUNCIATION = {
  alphabet: [
    {letter:'A a',sound:'ah',example:'Arbeit',ipa:'/aː/'},
    {letter:'B b',sound:'beh',example:'Brot',ipa:'/beː/'},
    {letter:'C c',sound:'tseh',example:'Computer',ipa:'/tseː/'},
    {letter:'D d',sound:'deh',example:'Deutsch',ipa:'/deː/'},
    {letter:'E e',sound:'eh',example:'Essen',ipa:'/eː/'},
    {letter:'F f',sound:'eff',example:'Familie',ipa:'/ɛf/'},
    {letter:'G g',sound:'geh',example:'gut',ipa:'/geː/'},
    {letter:'H h',sound:'hah',example:'Haus',ipa:'/haː/'},
    {letter:'I i',sound:'ee',example:'ich',ipa:'/iː/'},
    {letter:'J j',sound:'yot',example:'ja',ipa:'/jɔt/'},
    {letter:'K k',sound:'kah',example:'Kaffee',ipa:'/kaː/'},
    {letter:'L l',sound:'ell',example:'lernen',ipa:'/ɛl/'},
    {letter:'M m',sound:'emm',example:'Morgen',ipa:'/ɛm/'},
    {letter:'N n',sound:'enn',example:'Name',ipa:'/ɛn/'},
    {letter:'O o',sound:'oh',example:'oder',ipa:'/oː/'},
    {letter:'P p',sound:'peh',example:'Post',ipa:'/peː/'},
    {letter:'Q q',sound:'koo',example:'Qualität',ipa:'/kuː/'},
    {letter:'R r',sound:'err',example:'richtig',ipa:'/ɛʁ/'},
    {letter:'S s',sound:'ess',example:'Sonne',ipa:'/ɛs/'},
    {letter:'T t',sound:'teh',example:'Tag',ipa:'/teː/'},
    {letter:'U u',sound:'oo',example:'Uhr',ipa:'/uː/'},
    {letter:'V v',sound:'fow',example:'Vater',ipa:'/faʊ/'},
    {letter:'W w',sound:'veh',example:'Wasser',ipa:'/veː/'},
    {letter:'X x',sound:'iks',example:'Text',ipa:'/ɪks/'},
    {letter:'Y y',sound:'üpsilon',example:'Yoga',ipa:'/ˈʏpsilɔn/'},
    {letter:'Z z',sound:'tsett',example:'Zimmer',ipa:'/tsɛt/'},
  ],
  special: [
    {letter:'Ä ä',sound:'like "e" in "bed"',example:'Ärztin, Käse',tip:'Say "eh" with lips relaxed'},
    {letter:'Ö ö',sound:'like "ur" in "burn"',example:'schön, Österreich',tip:'Say "eh" with rounded lips'},
    {letter:'Ü ü',sound:'like "ew" but rounded',example:'über, Tür, Grüße',tip:'Say "ee" with rounded lips'},
    {letter:'ß (Eszett)',sound:'sharp S, like "ss"',example:'Straße, groß, heißen',tip:'Always sounds like "ss", never "z"'},
  ],
  rules: [
    {rule:'W sounds like English V',example:'Wasser = "Vasser"',note:'Never like English "w"'},
    {rule:'V sounds like English F',example:'Vater = "Fahter"',note:'Except in foreign words: Vase = "Vahze"'},
    {rule:'J sounds like English Y',example:'ja = "yah"',note:'Never like English "j"'},
    {rule:'Z sounds like "ts"',example:'Zimmer = "Tsimmer"',note:'Always "ts", never English "z"'},
    {rule:'CH after a/o/u = throat sound',example:'nach, Buch, Koch',note:'Like clearing your throat gently'},
    {rule:'CH after e/i = soft hiss',example:'ich, nicht, Milch',note:'Like the "h" in "huge" (British)'},
    {rule:'SCH = "sh"',example:'Schule, schön',note:'Like English "sh" in "ship"'},
    {rule:'SP at start = "shp"',example:'sprechen = "shprechen"',note:'SP and ST at start of word'},
    {rule:'ST at start = "sht"',example:'Straße = "Shtrasse"',note:'Not in the middle of words'},
    {rule:'EI = "eye"',example:'mein, nein, Arbeit',note:'Like English "eye" or "mine"'},
    {rule:'IE = "ee"',example:'die, sie, Bier',note:'Like English "see" or "bee"'},
    {rule:'EU/ÄU = "oy"',example:'heute, Häuser',note:'Like English "boy" or "toy"'},
  ],
};

// ─── GRAMMAR LESSONS ───
export const GRAMMAR = {
  A1: [
    {
      id: 'g-a1-01',
      title: 'Artikel: der, die, das',
      subtitle: 'Definite articles & noun genders',
      explanation: `Every German noun has a grammatical gender: masculine (der), feminine (die), or neuter (das). Unlike English, you MUST learn the article with every noun.\n\n• der → masculine: der Mann, der Tisch, der Bahnhof\n• die → feminine: die Frau, die Küche, die Arbeit\n• das → neuter: das Kind, das Haus, das Büro\n\nPlural is always "die" regardless of gender: die Männer, die Frauen, die Kinder`,
      keyRules: [
        'Nouns ending in -ung, -heit, -keit, -schaft, -tion are feminine (die)',
        'Nouns ending in -chen, -lein are neuter (das)',
        'Nouns ending in -er (for people/agents) are often masculine (der)',
        'Always learn the article WITH the noun!',
      ],
      exercises: [
        { q: '___ Wohnung ist groß.', options: ['Der', 'Die', 'Das'], answer: 1, hint: '-ung ending = die' },
        { q: '___ Kind spielt draußen.', options: ['Der', 'Die', 'Das'], answer: 2, hint: 'Kind = neuter' },
        { q: '___ Bahnhof ist in der Nähe.', options: ['Der', 'Die', 'Das'], answer: 0, hint: 'Bahnhof = masculine' },
        { q: '___ Büro ist im zweiten Stock.', options: ['Der', 'Die', 'Das'], answer: 2, hint: 'Büro = neuter' },
        { q: '___ Freiheit ist wichtig.', options: ['Der', 'Die', 'Das'], answer: 1, hint: '-heit ending = die' },
      ],
    },
    {
      id: 'g-a1-02',
      title: 'Konjugation: Präsens',
      subtitle: 'Present tense verb conjugation',
      explanation: `German verbs change form based on the subject. Regular verbs follow a pattern:\n\nich → -e (ich mache)\ndu → -st (du machst)\ner/sie/es → -t (er macht)\nwir → -en (wir machen)\nihr → -t (ihr macht)\nsie/Sie → -en (sie machen)\n\nSome important irregular verbs:\nsein (to be): bin, bist, ist, sind, seid, sind\nhaben (to have): habe, hast, hat, haben, habt, haben`,
      keyRules: [
        'ich = -e, du = -st, er/sie/es = -t',
        'wir & sie/Sie = -en (same as infinitive)',
        'sein and haben are highly irregular — memorize them!',
        'Verbs with stem ending in -t/-d add extra -e: arbeiten → du arbeitest',
      ],
      exercises: [
        { q: 'Ich ___ in Hamburg. (wohnen)', options: ['wohne', 'wohnst', 'wohnt'], answer: 0, hint: 'ich → -e' },
        { q: 'Er ___ als Analyst. (arbeiten)', options: ['arbeite', 'arbeitest', 'arbeitet'], answer: 2, hint: 'er → -et (stem ends in -t)' },
        { q: 'Wir ___ Deutsch. (lernen)', options: ['lerne', 'lernt', 'lernen'], answer: 2, hint: 'wir → -en' },
        { q: 'Du ___ sehr nett. (sein)', options: ['bin', 'bist', 'ist'], answer: 1, hint: 'du → bist (irregular)' },
        { q: 'Sie ___ zwei Kinder. (haben)', options: ['hat', 'habe', 'haben'], answer: 0, hint: 'sie (she) → hat' },
      ],
    },
    {
      id: 'g-a1-03',
      title: 'Wortstellung: V2-Regel',
      subtitle: 'Verb-second word order',
      explanation: `In German main clauses, the conjugated verb ALWAYS goes in the second position (V2 rule).\n\n• Ich gehe heute ins Kino.\n  (I go today to the cinema)\n• Heute gehe ich ins Kino.\n  (Today go I to the cinema)\n• Ins Kino gehe ich heute.\n  (To the cinema go I today)\n\nNotice: when another element comes first, the subject and verb swap (inversion).`,
      keyRules: [
        'Conjugated verb = ALWAYS position 2 in statements',
        'If something other than the subject starts the sentence, subject moves after the verb',
        'Questions: verb goes to position 1 (yes/no) or W-word + verb (W-questions)',
        'This is THE most important German word order rule',
      ],
      exercises: [
        { q: 'Morgen ___ ich nach Hamburg.', options: ['fahre', 'ich fahre', 'fahren'], answer: 0, hint: 'V2: Morgen = pos.1, verb = pos.2' },
        { q: '___ du Deutsch? (sprechen)', options: ['Sprichst', 'Du sprichst', 'Sprechen'], answer: 0, hint: 'Yes/no question: verb first' },
        { q: 'Am Montag ___ wir eine Besprechung.', options: ['haben', 'wir haben', 'hat'], answer: 0, hint: 'V2: Am Montag = pos.1, verb = pos.2' },
      ],
    },
    {
      id: 'g-a1-04',
      title: 'Akkusativ',
      subtitle: 'The accusative case (direct object)',
      explanation: `The accusative case marks the direct object — the thing/person receiving the action.\n\nOnly MASCULINE articles change in accusative:\n• der → den\n• ein → einen\n\nFeminine, neuter, and plural stay the same:\n• die → die, eine → eine\n• das → das, ein → ein\n• die (pl.) → die\n\nExample: Ich sehe den Mann. (I see the man.)`,
      keyRules: [
        'Only masculine changes: der→den, ein→einen',
        'Feminine, neuter, plural: NO change',
        'Accusative prepositions: durch, für, gegen, ohne, um',
        'Ask "Wen oder was?" (Whom or what?) to find the accusative',
      ],
      exercises: [
        { q: 'Ich kaufe ___ Tisch. (der Tisch)', options: ['der', 'den', 'dem'], answer: 1, hint: 'masculine → den in accusative' },
        { q: 'Siehst du ___ Frau? (die Frau)', options: ['die', 'der', 'den'], answer: 0, hint: 'feminine = no change' },
        { q: 'Er hat ___ neuen Job. (ein Job)', options: ['ein', 'einen', 'einem'], answer: 1, hint: 'masculine ein → einen' },
        { q: 'Ich trinke ___ Wasser. (das Wasser)', options: ['das', 'den', 'dem'], answer: 0, hint: 'neuter = no change' },
      ],
    },
    {
      id: 'g-a1-05',
      title: 'Negation: nicht & kein',
      subtitle: 'How to say "not" and "no/none"',
      explanation: `German has two ways to negate:\n\n1. KEIN (no/not a) — negates nouns with ein/eine or no article:\n• Ich habe ein Auto → Ich habe kein Auto.\n• Ich trinke Milch → Ich trinke keine Milch.\n\n2. NICHT (not) — negates everything else:\n• Ich bin nicht müde. (adjective)\n• Ich komme nicht aus Berlin. (prepositional phrase)\n• Ich arbeite nicht. (verb)\n\nKein declines like ein: kein/keine/kein/keinen/keinem/keiner`,
      keyRules: [
        'kein = negates nouns (replaces ein or zero article)',
        'nicht = negates verbs, adjectives, adverbs, prepositional phrases',
        'nicht usually goes at the end or before what it negates',
        'kein follows ein-word declension patterns',
      ],
      exercises: [
        { q: 'Ich habe ___ Hunger.', options: ['nicht', 'keinen', 'kein'], answer: 1, hint: 'Hunger is masculine, accusative → keinen' },
        { q: 'Das ist ___ richtig.', options: ['nicht', 'kein', 'keine'], answer: 0, hint: 'nicht negates adjective' },
        { q: 'Ich spreche ___ Französisch.', options: ['nicht', 'kein', 'keine'], answer: 0, hint: 'nicht negates verb phrase' },
        { q: 'Wir haben ___ Zeit.', options: ['nicht', 'keine', 'kein'], answer: 1, hint: 'Zeit is feminine → keine' },
      ],
    },
    {
      id: 'g-a1-06',
      title: 'Trennbare Verben',
      subtitle: 'Separable prefix verbs',
      explanation: `Many German verbs have separable prefixes that split off in the present tense:\n\nanfangen (to begin): Ich fange um 9 Uhr an.\naufstehen (to get up): Ich stehe um 7 Uhr auf.\neinkaufen (to shop): Wir kaufen im Supermarkt ein.\n\nCommon separable prefixes:\nab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-\n\nThe prefix goes to the END of the main clause.`,
      keyRules: [
        'Prefix goes to the end of the clause',
        'Common prefixes: ab, an, auf, aus, ein, mit, vor, zu, zurück',
        'In infinitive + modal verb, the prefix stays attached: Ich muss um 7 aufstehen.',
        'Stress falls on the prefix: ANfangen, AUFstehen',
      ],
      exercises: [
        { q: 'Ich ___ morgen früh ___. (aufstehen)', options: ['stehe...auf', 'aufstehe', 'stehe auf...'], answer: 0, hint: 'Prefix → end' },
        { q: 'Wir ___ um 18 Uhr ___. (anfangen)', options: ['fangen...an', 'anfangen', 'an...fangen'], answer: 0, hint: 'Prefix goes to end' },
        { q: 'Er ___ seine Freundin ___. (anrufen)', options: ['ruft...an', 'anruft', 'rufen...an'], answer: 0, hint: 'er → ruft, prefix → an at end' },
      ],
    },
  ],
  A2: [
    {
      id: 'g-a2-01',
      title: 'Dativ',
      subtitle: 'The dative case (indirect object)',
      explanation: `The dative marks the indirect object — the recipient of the action.\n\nArticle changes:\n• der/ein → dem/einem\n• die/eine → der/einer\n• das/ein → dem/einem\n• die (pl.) → den + noun adds -n\n\nDativ prepositions: aus, bei, mit, nach, seit, von, zu\nThese ALWAYS take dative.\n\nExample: Ich gebe dem Mann das Buch.`,
      keyRules: [
        'der/das → dem, die → der, die (pl.) → den (+n on noun)',
        'Always dative after: aus, bei, mit, nach, seit, von, zu',
        'Ask "Wem?" (To whom?) to find the dative',
        'Dative plural nouns add -n: den Kindern, den Frauen',
      ],
      exercises: [
        { q: 'Ich helfe ___ Frau. (die Frau)', options: ['der', 'die', 'den'], answer: 0, hint: 'die → der in dative' },
        { q: 'Er fährt mit ___ Bus. (der Bus)', options: ['dem', 'den', 'der'], answer: 0, hint: 'mit + dative: der → dem' },
        { q: 'Wir geben ___ Kindern Geschenke.', options: ['den', 'die', 'dem'], answer: 0, hint: 'plural dative → den + n' },
        { q: 'Sie kommt aus ___ Türkei. (die Türkei)', options: ['der', 'die', 'dem'], answer: 0, hint: 'aus + dative: die → der' },
      ],
    },
    {
      id: 'g-a2-02',
      title: 'Perfekt (das Perfekt)',
      subtitle: 'Conversational past tense',
      explanation: `Perfekt is the main past tense in spoken German.\n\nStructure: haben/sein + past participle (at the end)\n\nRegular: ge- + stem + -t\nmachen → gemacht, kaufen → gekauft\n\nIrregular: ge- + stem change + -en\ngehen → gegangen, schreiben → geschrieben\n\nUse SEIN with:\n• Movement verbs: gehen, fahren, fliegen, kommen\n• State change: aufwachen, einschlafen, sterben\n• sein, werden, bleiben\n\nIch habe Deutsch gelernt.\nIch bin nach Hamburg gefahren.`,
      keyRules: [
        'haben + Partizip II for most verbs',
        'sein + Partizip II for movement & state-change verbs',
        'Regular: ge-___-t (gemacht, gekauft)',
        'Irregular: ge-___-en with stem change (gegangen, geschrieben)',
        'Inseparable prefixes (be-, emp-, ent-, er-, ge-, ver-, zer-): NO ge- (besucht, verstanden)',
      ],
      exercises: [
        { q: 'Ich ___ gestern Deutsch ___. (lernen)', options: ['habe...gelernt', 'bin...gelernt', 'habe...gelernt'], answer: 0, hint: 'haben + ge-lernt' },
        { q: 'Er ___ nach Hamburg ___. (fahren)', options: ['hat...gefahren', 'ist...gefahren', 'hat...gefahrt'], answer: 1, hint: 'fahren = movement → sein' },
        { q: 'Wir ___ das Museum ___. (besuchen)', options: ['haben...besucht', 'haben...gebesucht', 'sind...besucht'], answer: 0, hint: 'be- prefix: no ge-' },
      ],
    },
    {
      id: 'g-a2-03',
      title: 'Wechselpräpositionen',
      subtitle: 'Two-way prepositions (Akkusativ or Dativ)',
      explanation: `Nine prepositions can take EITHER accusative or dative:\nan, auf, hinter, in, neben, über, unter, vor, zwischen\n\nRule:\n• AKKUSATIV = movement/direction (Wohin? Where to?)\n  Ich gehe in den Park.\n• DATIV = location/position (Wo? Where?)\n  Ich bin in dem (im) Park.\n\nContractions: in dem → im, an dem → am, in das → ins, an das → ans`,
      keyRules: [
        'Movement (wohin?) → Akkusativ',
        'Location (wo?) → Dativ',
        'The 9: an, auf, hinter, in, neben, über, unter, vor, zwischen',
        'Common contractions: im, am, ins, ans',
      ],
      exercises: [
        { q: 'Ich gehe in ___ Supermarkt. (movement)', options: ['den', 'dem', 'der'], answer: 0, hint: 'Wohin? → Akkusativ → den' },
        { q: 'Das Buch liegt auf ___ Tisch. (location)', options: ['dem', 'den', 'der'], answer: 0, hint: 'Wo? → Dativ → dem' },
        { q: 'Sie hängt das Bild an ___ Wand.', options: ['die', 'der', 'dem'], answer: 0, hint: 'Wohin? → Akkusativ, Wand is feminine → die' },
      ],
    },
    {
      id: 'g-a2-04',
      title: 'Nebensätze mit weil, dass, wenn',
      subtitle: 'Subordinate clauses',
      explanation: `In subordinate clauses, the conjugated verb goes to the END.\n\nMain clause: Ich lerne Deutsch.\nWith "weil": Ich lerne Deutsch, weil ich in Hamburg arbeite.\n\nKey conjunctions:\n• weil (because): Ich bleibe zu Hause, weil ich krank bin.\n• dass (that): Ich weiß, dass er Deutsch spricht.\n• wenn (if/when): Wenn es regnet, bleibe ich zu Hause.\n• obwohl (although): Obwohl es schwer ist, lerne ich weiter.`,
      keyRules: [
        'Subordinate clause: verb goes to the END',
        'Comma always separates main and subordinate clause',
        'If subordinate clause comes first, main clause verb immediately follows the comma',
        'Wenn ich Zeit habe, lerne ich Deutsch. (verb-verb at the comma)',
      ],
      exercises: [
        { q: 'Ich lerne Deutsch, weil ich in Hamburg ___.', options: ['arbeite', 'arbeiten', 'arbeit'], answer: 0, hint: 'Verb at end, ich → -e' },
        { q: 'Er sagt, dass er morgen ___.', options: ['kommt', 'kommen', 'komme'], answer: 0, hint: 'Verb at end, er → -t' },
        { q: 'Wenn es kalt ___, ziehe ich eine Jacke an.', options: ['ist', 'sein', 'bist'], answer: 0, hint: 'Verb at end, es → ist' },
      ],
    },
  ],
  B1: [
    {
      id: 'g-b1-01',
      title: 'Konjunktiv II',
      subtitle: 'Subjunctive mood for wishes & politeness',
      explanation: `Konjunktiv II expresses wishes, hypotheticals, and polite requests.\n\nForms:\n• würde + Infinitiv (most verbs): Ich würde gerne in Hamburg wohnen.\n• Special forms for common verbs:\n  hätte (would have), wäre (would be), könnte (could), müsste (would have to), sollte (should)\n\nUses:\n• Wishes: Ich hätte gerne einen Kaffee.\n• Hypothetical: Wenn ich reich wäre, würde ich reisen.\n• Polite: Könnten Sie mir helfen?`,
      keyRules: [
        'würde + Infinitiv for most verbs',
        'hätte, wäre, könnte, müsste, sollte — learn these special forms',
        'Wenn + Konj. II, Konj. II (If clause structure)',
        'Essential for polite German in professional settings',
      ],
      exercises: [
        { q: 'Ich ___ gerne einen Kaffee. (haben)', options: ['hätte', 'habe', 'würde'], answer: 0, hint: 'Konjunktiv II of haben = hätte' },
        { q: '___ Sie mir bitte helfen? (können)', options: ['Könnten', 'Können', 'Konnten'], answer: 0, hint: 'Polite request: Konjunktiv II' },
        { q: 'Wenn ich Zeit ___, würde ich Sport machen.', options: ['hätte', 'habe', 'hat'], answer: 0, hint: 'Hypothetical wenn-clause → hätte' },
      ],
    },
    {
      id: 'g-b1-02',
      title: 'Passiv',
      subtitle: 'The passive voice',
      explanation: `Passive shifts focus from the doer to the action or recipient.\n\nStructure: werden + Partizip II\n\nPräsens Passiv: Das Haus wird gebaut. (The house is being built.)\nPerfekt Passiv: Das Haus ist gebaut worden. (The house has been built.)\nPräteritum Passiv: Das Haus wurde gebaut. (The house was built.)\n\nThe doer (if mentioned) uses "von + Dativ":\nDas Buch wird von dem Autor geschrieben.`,
      keyRules: [
        'werden + Partizip II',
        'Agent = von + Dativ',
        'Perfekt Passiv: ist ... worden (not geworden!)',
        'Common in formal/written German and exam texts',
      ],
      exercises: [
        { q: 'Das Auto ___ repariert. (werden, Präsens)', options: ['wird', 'wurde', 'ist'], answer: 0, hint: 'Präsens Passiv: wird + Partizip II' },
        { q: 'Der Brief ___ gestern geschrieben. (werden, Präteritum)', options: ['wurde', 'wird', 'ist'], answer: 0, hint: 'Präteritum Passiv: wurde' },
        { q: 'Die E-Mail ist von dem Chef ___ worden.', options: ['geschrieben', 'schreiben', 'geschreibt'], answer: 0, hint: 'Perfekt Passiv: ist + Partizip II + worden' },
      ],
    },
  ],
};

// ─── EXAM PRACTICE: LESEN (Reading) ───
export const READING_EXERCISES = {
  A1: [
    {
      id: 'r-a1-01',
      title: 'Anzeigen lesen (Teil 1)',
      type: 'Goethe A1 / TELC A1',
      instruction: 'Read the notice and answer the question.',
      text: `WOHNUNGSANZEIGE\n2-Zimmer-Wohnung in Hamburg-Altona\n55 m², 3. Stock, Balkon\nMiete: 750 € (warm)\nKaution: 2 Monatsmieten\nFrei ab: 01.06.2025\nKontakt: Herr Braun, Tel: 040-555-1234`,
      questions: [
        { q: 'How much is the monthly rent?', options: ['550 €', '750 €', '1500 €', '2 Monatsmieten'], answer: 1 },
        { q: 'When is the apartment available?', options: ['Now', 'June 2025', 'July 2025', 'January 2025'], answer: 1 },
        { q: 'What floor is the apartment on?', options: ['1st', '2nd', '3rd', 'Ground floor'], answer: 2 },
      ],
    },
    {
      id: 'r-a1-02',
      title: 'E-Mail verstehen (Teil 2)',
      type: 'Goethe A1 / TELC A1',
      instruction: 'Read the email and answer the questions.',
      text: `Lieber Merrill,\n\nwillkommen in Hamburg! Ich bin dein Nachbar aus der Wohnung 4B. Mein Name ist Thomas.\n\nAm Samstag mache ich eine kleine Party. Kommst du? Wir fangen um 19 Uhr an. Bring bitte etwas zu trinken mit.\n\nMeine Handynummer ist 0170-123-4567.\n\nViele Grüße\nThomas`,
      questions: [
        { q: 'Who is Thomas?', options: ['A colleague', 'A neighbor', 'A teacher', 'A doctor'], answer: 1 },
        { q: 'When is the party?', options: ['Friday', 'Saturday', 'Sunday', 'Monday'], answer: 1 },
        { q: 'What should Merrill bring?', options: ['Food', 'Something to drink', 'Music', 'A gift'], answer: 1 },
      ],
    },
  ],
  A2: [
    {
      id: 'r-a2-01',
      title: 'Informationstext (Teil 1)',
      type: 'Goethe A2 / TELC A2',
      instruction: 'Read the information text and answer the questions.',
      text: `HAMBURGER VOLKSHOCHSCHULE (VHS)\nDeutschkurse für Erwachsene\n\nIntensivkurs A1: Mo–Fr, 9:00–12:30 Uhr\nDauer: 8 Wochen | Preis: 390 €\n\nAbendkurs A2: Di + Do, 18:00–20:30 Uhr\nDauer: 16 Wochen | Preis: 280 €\n\nAnmeldung: Online unter www.vhs-hamburg.de\noder persönlich im Büro (Mo–Fr, 10–16 Uhr)\n\nSie brauchen: Ausweis/Pass, Anmeldeformular.\nFür Ermäßigung: Bescheinigung vom Jobcenter.`,
      questions: [
        { q: 'How long does the A1 intensive course last?', options: ['4 weeks', '8 weeks', '16 weeks', '12 weeks'], answer: 1 },
        { q: 'When is the A2 evening course?', options: ['Mon + Wed', 'Tue + Thu', 'Mon–Fri', 'Sat + Sun'], answer: 1 },
        { q: 'What do you need for a discount?', options: ['Student ID', 'Jobcenter certificate', 'Health insurance', 'Bank statement'], answer: 1 },
      ],
    },
  ],
  B1: [
    {
      id: 'r-b1-01',
      title: 'Zeitungsartikel (Teil 2)',
      type: 'Goethe B1 / TELC B1',
      instruction: 'Read the article excerpt and answer the questions.',
      text: `HOMEOFFICE: FLUCH ODER SEGEN?\n\nImmer mehr Unternehmen in Deutschland bieten ihren Mitarbeitern die Möglichkeit, von zu Hause aus zu arbeiten. Eine neue Studie zeigt: 60% der Arbeitnehmer arbeiten mindestens einen Tag pro Woche im Homeoffice.\n\nDie Vorteile liegen auf der Hand: kein Pendeln, flexible Zeiteinteilung und mehr Zeit für die Familie. Allerdings berichten viele auch von Nachteilen: fehlender Kontakt zu Kollegen, Schwierigkeiten bei der Trennung von Arbeit und Privatleben und manchmal auch Einsamkeit.\n\nExperten empfehlen eine Mischung aus Büro- und Heimarbeit — das sogenannte hybride Modell.`,
      questions: [
        { q: 'What percentage work from home at least once a week?', options: ['40%', '50%', '60%', '70%'], answer: 2 },
        { q: 'Which is NOT mentioned as a disadvantage?', options: ['Loneliness', 'Less contact with colleagues', 'Lower salary', 'Difficulty separating work and life'], answer: 2 },
        { q: 'What do experts recommend?', options: ['Only office work', 'Only home office', 'A hybrid model', 'Fewer working hours'], answer: 2 },
      ],
    },
  ],
};

// ─── EXAM PRACTICE: SCHREIBEN (Writing) ───
export const WRITING_EXERCISES = {
  A1: [
    {
      id: 'w-a1-01',
      title: 'Formular ausfüllen',
      type: 'Goethe A1 Teil 1',
      instruction: 'Fill in the registration form with your personal information.',
      fields: ['Vorname', 'Nachname', 'Geburtsdatum', 'Geburtsort', 'Staatsangehörigkeit', 'Adresse', 'Telefonnummer', 'E-Mail', 'Beruf', 'Familienstand'],
      tips: 'In Goethe A1, Part 1 of Schreiben asks you to fill in a form. Practice writing your personal details in German format: date = DD.MM.YYYY, phone with country code.',
    },
    {
      id: 'w-a1-02',
      title: 'Kurze Nachricht schreiben',
      type: 'Goethe A1 Teil 2',
      instruction: 'Write a short message (about 30 words) to your colleague. Include: Thank for invitation, say you are coming, ask what to bring.',
      sampleAnswer: 'Lieber Thomas,\n\nvielen Dank für die Einladung! Ich komme gern am Samstag. Was soll ich mitbringen? Essen oder Getränke?\n\nViele Grüße\nMerrill',
      tips: 'Always include: greeting (Lieber/Liebe), answer all 3 points, closing (Viele Grüße + name). Keep it simple — short sentences are fine at A1!',
    },
  ],
  A2: [
    {
      id: 'w-a2-01',
      title: 'Persönliche E-Mail',
      type: 'Goethe A2 / TELC A2',
      instruction: 'Write an email to a friend (about 50-60 words). You just moved to Hamburg. Write about: 1) your new apartment, 2) your new job, 3) invite your friend to visit.',
      sampleAnswer: 'Liebe Anna,\n\nich bin jetzt in Hamburg! Meine neue Wohnung ist in Altona. Sie ist klein, aber gemütlich und hat einen Balkon.\n\nMeine Arbeit bei adjoe gefällt mir sehr gut. Die Kollegen sind nett und ich lerne viel über Daten.\n\nKommst du mich besuchen? Im Sommer ist Hamburg besonders schön!\n\nLiebe Grüße\nMerrill',
      tips: 'Address all 3 points. Use connectors: und, aber, auch, deshalb. Show A2 grammar: Perfekt, Dativ prepositions. Keep sentences varied but not too complex.',
    },
  ],
  B1: [
    {
      id: 'w-b1-01',
      title: 'Formelle Beschwerde',
      type: 'Goethe B1 / TELC B1',
      instruction: 'Write a formal complaint email (about 80 words) to your internet provider. Your internet has not been working for 3 days. Include: describe the problem, request a solution, set a deadline.',
      sampleAnswer: 'Sehr geehrte Damen und Herren,\n\nseit drei Tagen funktioniert mein Internet nicht mehr. Ich habe bereits den Router neu gestartet, aber das Problem besteht weiterhin.\n\nDa ich das Internet für meine Arbeit im Homeoffice brauche, bitte ich Sie dringend, das Problem bis spätestens Freitag zu lösen. Andernfalls muss ich den Vertrag kündigen.\n\nMit freundlichen Grüßen\nMerrill Ejike\nKundennummer: 12345',
      tips: 'Formal style: Sehr geehrte Damen und Herren / Mit freundlichen Grüßen. Use Konjunktiv II for politeness. Clear structure: problem → impact → request → consequence. Include customer number.',
    },
  ],
};

// ─── SPEAKING PRACTICE ───
export const SPEAKING_EXERCISES = {
  A1: [
    {
      id: 's-a1-01',
      title: 'Sich vorstellen',
      type: 'Goethe A1 Sprechen Teil 1',
      instruction: 'Introduce yourself. Cover: name, country, city, profession, languages, hobbies.',
      promptCards: ['Name?', 'Woher?', 'Wohnort?', 'Beruf?', 'Sprachen?', 'Hobbys?'],
      sampleResponse: 'Ich heiße Merrill. Ich komme aus Nigeria, aber jetzt wohne ich in Hamburg. Ich bin Data Analyst von Beruf. Ich spreche Englisch und ich lerne Deutsch. Meine Hobbys sind Programmieren und Lesen.',
      tips: 'Speak slowly and clearly. Use simple sentences: Ich heiße... Ich komme aus... Ich bin... von Beruf. Each card = 1-2 sentences.',
    },
    {
      id: 's-a1-02',
      title: 'Um etwas bitten',
      type: 'Goethe A1 Sprechen Teil 2',
      instruction: 'Practice asking for things politely. Pick a card and form a request.',
      promptCards: ['Ein Glas Wasser', 'Die Speisekarte', 'Die Rechnung', 'Ein Formular', 'Einen Termin', 'Die Telefonnummer'],
      sampleResponse: 'Entschuldigung, kann ich bitte ein Glas Wasser haben? / Können Sie mir bitte die Speisekarte geben? / Ich hätte gerne die Rechnung, bitte.',
      tips: 'Key phrases: Kann ich bitte...? / Können Sie mir...geben? / Ich hätte gerne... / Entschuldigung, wo ist...?',
    },
  ],
  A2: [
    {
      id: 's-a2-01',
      title: 'Über den Alltag sprechen',
      type: 'Goethe A2 / TELC A2',
      instruction: 'Describe your daily routine. Use time expressions and separable verbs.',
      promptCards: ['Morgens', 'Auf der Arbeit', 'Mittagspause', 'Nach der Arbeit', 'Abends', 'Am Wochenende'],
      sampleResponse: 'Morgens stehe ich um 7 Uhr auf. Dann frühstücke ich und fahre mit der U-Bahn zur Arbeit. Im Büro arbeite ich mit Daten und habe Besprechungen. In der Mittagspause esse ich in der Kantine. Nach der Arbeit gehe ich manchmal ins Fitnessstudio. Abends koche ich und lerne Deutsch.',
      tips: 'Use time connectors: dann, danach, zuerst, manchmal, oft, immer. Show separable verbs: aufstehen, anfangen, einkaufen. Vary sentence starters for V2 practice.',
    },
  ],
  B1: [
    {
      id: 's-b1-01',
      title: 'Meinung äußern',
      type: 'Goethe B1 / TELC B1',
      instruction: 'Express your opinion on: "Should companies require employees to learn the local language?"',
      promptCards: ['Dafür (For)', 'Dagegen (Against)', 'Persönliche Erfahrung', 'Kompromiss / Lösung'],
      sampleResponse: 'Meiner Meinung nach ist es wichtig, die Sprache des Landes zu lernen. Einerseits hilft es bei der Integration und man versteht die Kultur besser. Andererseits braucht man Zeit, um eine Sprache zu lernen, und nicht alle können schnell lernen. Ich denke, Unternehmen sollten Sprachkurse anbieten, aber keine Perfektion erwarten. Aus meiner Erfahrung kann ich sagen, dass Deutschlernen mir sehr hilft, mich in Hamburg wohl zu fühlen.',
      tips: 'Structure: Meiner Meinung nach... / Einerseits...andererseits... / Ich denke, dass... / Aus meiner Erfahrung... Use Konjunktiv II for suggestions: sollten, könnten.',
    },
  ],
};

// ─── LISTENING PRACTICE (simulated with transcripts) ───
export const LISTENING_EXERCISES = {
  A1: [
    {
      id: 'l-a1-01',
      title: 'Ansagen verstehen',
      type: 'Goethe A1 Hören Teil 1',
      instruction: 'Read the announcement transcript and answer questions (in real exam, you listen).',
      transcript: 'Achtung, eine Durchsage: Der ICE 790 nach Hamburg Hauptbahnhof fährt heute von Gleis 14 ab. Ich wiederhole: Gleis 14. Abfahrt um 10 Uhr 35. Bitte beachten Sie die Gleisänderung.',
      questions: [
        { q: 'Where is the train going?', options: ['Berlin', 'Hamburg Hauptbahnhof', 'München', 'Frankfurt'], answer: 1 },
        { q: 'What platform?', options: ['4', '10', '14', '35'], answer: 2 },
        { q: 'What time does it depart?', options: ['10:14', '10:30', '10:35', '14:35'], answer: 2 },
      ],
    },
    {
      id: 'l-a1-02',
      title: 'Telefongespräch',
      type: 'Goethe A1 Hören Teil 2',
      instruction: 'Read the phone conversation transcript and answer questions.',
      transcript: 'Praxis Dr. Schmidt, guten Tag.\n— Guten Tag, hier ist Merrill Ejike. Ich möchte bitte einen Termin machen.\n— Natürlich. Wann passt es Ihnen? Am Montag um 10 Uhr oder am Mittwoch um 14 Uhr?\n— Mittwoch um 14 Uhr, bitte.\n— Gut. Bringen Sie bitte Ihre Versichertenkarte mit.\n— Mache ich. Vielen Dank!',
      questions: [
        { q: 'Where is Merrill calling?', options: ['A restaurant', 'A doctor\'s office', 'A school', 'A bank'], answer: 1 },
        { q: 'Which appointment does he choose?', options: ['Monday 10:00', 'Wednesday 14:00', 'Tuesday 10:00', 'Thursday 14:00'], answer: 1 },
        { q: 'What should he bring?', options: ['His passport', 'Insurance card', 'Money', 'A letter'], answer: 1 },
      ],
    },
  ],
  A2: [
    {
      id: 'l-a2-01',
      title: 'Radiomeldung',
      type: 'Goethe A2 Hören',
      instruction: 'Read the radio announcement transcript and answer questions.',
      transcript: 'Und jetzt das Wetter für Hamburg und Umgebung: Heute Nachmittag wird es bewölkt mit Temperaturen um 15 Grad. Am Abend ist mit Regen zu rechnen. Morgen früh gibt es Nebel, aber am Nachmittag kommt die Sonne raus. Die Temperaturen steigen auf 18 Grad. Gute Nachrichten fürs Wochenende: Es bleibt trocken und sonnig bei bis zu 22 Grad.',
      questions: [
        { q: 'What is today\'s afternoon weather?', options: ['Sunny', 'Cloudy', 'Rainy', 'Foggy'], answer: 1 },
        { q: 'What is expected tomorrow morning?', options: ['Sun', 'Rain', 'Fog', 'Snow'], answer: 2 },
        { q: 'What is the weekend forecast?', options: ['Rainy', 'Dry and sunny', 'Cold', 'Stormy'], answer: 1 },
      ],
    },
  ],
  B1: [
    {
      id: 'l-b1-01',
      title: 'Interview verstehen',
      type: 'Goethe B1 Hören',
      instruction: 'Read the interview transcript and answer questions.',
      transcript: 'Moderator: Herr Müller, Sie arbeiten seit 20 Jahren als Personalchef. Was ist Ihnen bei Bewerbern am wichtigsten?\n\nMüller: Am wichtigsten ist mir die Motivation. Noten und Abschlüsse sind natürlich auch wichtig, aber wenn jemand wirklich begeistert ist von der Stelle, merkt man das sofort.\n\nModerator: Und was sind typische Fehler im Vorstellungsgespräch?\n\nMüller: Viele Bewerber informieren sich nicht über das Unternehmen. Das ist ein großer Fehler. Außerdem sollte man pünktlich sein und angemessene Kleidung tragen.',
      questions: [
        { q: 'What does Herr Müller consider most important?', options: ['Grades', 'Experience', 'Motivation', 'Appearance'], answer: 2 },
        { q: 'What is a typical mistake?', options: ['Arriving early', 'Not researching the company', 'Asking about salary', 'Being too motivated'], answer: 1 },
        { q: 'What else does he recommend?', options: ['Bring a gift', 'Be punctual and dress appropriately', 'Send a follow-up email', 'Speak only German'], answer: 1 },
      ],
    },
  ],
};

// ─── PHRASES FOR DAILY LIFE IN GERMANY ───
export const DAILY_PHRASES = {
  'At the Bürgeramt': [
    { de: 'Ich möchte mich anmelden.', en: 'I would like to register.' },
    { de: 'Hier ist mein Mietvertrag.', en: 'Here is my rental contract.' },
    { de: 'Ich brauche eine Meldebescheinigung.', en: 'I need a registration certificate.' },
    { de: 'Wann bekomme ich meinen Aufenthaltstitel?', en: 'When will I get my residence permit?' },
  ],
  'At the Doctor': [
    { de: 'Ich habe Kopfschmerzen.', en: 'I have a headache.' },
    { de: 'Seit wann haben Sie die Beschwerden?', en: 'Since when have you had these symptoms?' },
    { de: 'Ich brauche eine Krankschreibung.', en: 'I need a sick note.' },
    { de: 'Sind Sie gegen etwas allergisch?', en: 'Are you allergic to anything?' },
  ],
  'At the Bank': [
    { de: 'Ich möchte ein Girokonto eröffnen.', en: 'I would like to open a checking account.' },
    { de: 'Wie hoch sind die Kontoführungsgebühren?', en: 'What are the account maintenance fees?' },
    { de: 'Ich möchte Geld überweisen.', en: 'I would like to transfer money.' },
    { de: 'Kann ich eine EC-Karte bekommen?', en: 'Can I get a debit card?' },
  ],
  'At Work': [
    { de: 'Können wir einen Termin vereinbaren?', en: 'Can we schedule a meeting?' },
    { de: 'Ich schicke Ihnen die Unterlagen.', en: 'I will send you the documents.' },
    { de: 'Bis wann brauchen Sie das?', en: 'When do you need this by?' },
    { de: 'Ich habe eine Frage zum Projekt.', en: 'I have a question about the project.' },
    { de: 'Schönen Feierabend!', en: 'Have a nice evening (after work)!' },
  ],
  'Shopping & Restaurants': [
    { de: 'Was können Sie empfehlen?', en: 'What can you recommend?' },
    { de: 'Ich hätte gerne die Rechnung.', en: 'I would like the bill, please.' },
    { de: 'Kann ich mit Karte zahlen?', en: 'Can I pay by card?' },
    { de: 'Haben Sie das in einer anderen Größe?', en: 'Do you have this in another size?' },
  ],
  'Hamburg Specific': [
    { de: 'Moin Moin!', en: 'Hello! (Hamburg greeting)' },
    { de: 'Wo ist die nächste U-Bahn-Station?', en: 'Where is the nearest subway station?' },
    { de: 'Eine HVV-Tageskarte, bitte.', en: 'An HVV day ticket, please.' },
    { de: 'Wie komme ich zum Hafen?', en: 'How do I get to the harbor?' },
  ],
};

// ─── STUDY PLAN ───
export const STUDY_PLAN = {
  A1: {
    duration: '8-12 weeks',
    hoursPerWeek: 8,
    milestones: [
      { week: '1-2', focus: 'Alphabet, pronunciation, greetings, numbers 1-100, basic phrases', exam: 'Can introduce yourself' },
      { week: '3-4', focus: 'Present tense regular verbs, articles (der/die/das), family, food vocabulary', exam: 'Can order in a restaurant' },
      { week: '5-6', focus: 'Accusative case, negation, separable verbs, daily routines, time', exam: 'Can describe your day' },
      { week: '7-8', focus: 'Modal verbs, housing vocabulary, directions, V2 word order', exam: 'Can ask for directions' },
      { week: '9-10', focus: 'Perfekt (past tense intro), health, body parts, making appointments', exam: 'Can make an appointment' },
      { week: '11-12', focus: 'Exam practice: all 4 skills, mock tests, review weak areas', exam: 'Ready for Goethe A1!' },
    ],
  },
  A2: {
    duration: '12-16 weeks',
    hoursPerWeek: 10,
    milestones: [
      { week: '1-3', focus: 'Dative case, dative prepositions, Perfekt (all forms), work vocabulary', exam: 'Can talk about past events' },
      { week: '4-6', focus: 'Two-way prepositions, reflexive verbs, comparatives, housing & bureaucracy', exam: 'Can handle registration' },
      { week: '7-9', focus: 'Subordinate clauses (weil, dass, wenn), future, travel & transport', exam: 'Can write simple emails' },
      { week: '10-12', focus: 'Adjective endings (intro), Präteritum (haben/sein), opinions', exam: 'Can express simple opinions' },
      { week: '13-16', focus: 'Exam practice: all 4 skills, mock tests, conversation practice', exam: 'Ready for Goethe A2!' },
    ],
  },
  B1: {
    duration: '16-20 weeks',
    hoursPerWeek: 12,
    milestones: [
      { week: '1-4', focus: 'Konjunktiv II, passive voice, genitive case, complex sentences', exam: 'Can express hypotheticals' },
      { week: '5-8', focus: 'Relative clauses, indirect speech, advanced connectors, formal writing', exam: 'Can write formal letters' },
      { week: '9-12', focus: 'Adjective declension (all cases), Plusquamperfekt, news & media', exam: 'Can discuss news articles' },
      { week: '13-16', focus: 'Advanced speaking strategies, debate, presentation skills', exam: 'Can give a presentation' },
      { week: '17-20', focus: 'Full exam practice: Goethe B1 & TELC B1 mock tests', exam: 'Ready for B1 exams!' },
    ],
  },
};
