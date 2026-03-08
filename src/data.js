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
export const VOCABULARY = {
  A1: [
    // Theme: Begrüßung & Vorstellung
    { id: 'a1v001', word: 'Guten Morgen', article: '', meaning: 'Good morning', example: 'Guten Morgen, wie geht es Ihnen?', theme: 'Begrüßung', tags: ['greeting'] },
    { id: 'a1v002', word: 'Guten Tag', article: '', meaning: 'Good day / Hello', example: 'Guten Tag, mein Name ist Merrill.', theme: 'Begrüßung', tags: ['greeting'] },
    { id: 'a1v003', word: 'Auf Wiedersehen', article: '', meaning: 'Goodbye', example: 'Auf Wiedersehen und bis morgen!', theme: 'Begrüßung', tags: ['greeting'] },
    { id: 'a1v004', word: 'Tschüss', article: '', meaning: 'Bye (informal)', example: 'Tschüss, bis später!', theme: 'Begrüßung', tags: ['greeting', 'informal'] },
    { id: 'a1v005', word: 'Name', article: 'der', meaning: 'name', example: 'Wie ist Ihr Name?', theme: 'Begrüßung', tags: ['personal'] },
    { id: 'a1v006', word: 'Frau', article: 'die', meaning: 'woman / Mrs.', example: 'Frau Müller ist meine Lehrerin.', theme: 'Begrüßung', tags: ['personal'] },
    { id: 'a1v007', word: 'Herr', article: 'der', meaning: 'man / Mr.', example: 'Herr Schmidt arbeitet bei Siemens.', theme: 'Begrüßung', tags: ['personal'] },
    // Theme: Zahlen & Zeit
    { id: 'a1v008', word: 'Uhr', article: 'die', meaning: 'clock / hour', example: 'Es ist drei Uhr.', theme: 'Zahlen & Zeit', tags: ['time'] },
    { id: 'a1v009', word: 'Tag', article: 'der', meaning: 'day', example: 'Welcher Tag ist heute?', theme: 'Zahlen & Zeit', tags: ['time'] },
    { id: 'a1v010', word: 'Woche', article: 'die', meaning: 'week', example: 'Nächste Woche habe ich frei.', theme: 'Zahlen & Zeit', tags: ['time'] },
    { id: 'a1v011', word: 'Monat', article: 'der', meaning: 'month', example: 'Welcher Monat ist jetzt?', theme: 'Zahlen & Zeit', tags: ['time'] },
    { id: 'a1v012', word: 'Jahr', article: 'das', meaning: 'year', example: 'Dieses Jahr lerne ich Deutsch.', theme: 'Zahlen & Zeit', tags: ['time'] },
    // Theme: Familie
    { id: 'a1v013', word: 'Familie', article: 'die', meaning: 'family', example: 'Meine Familie wohnt in Nigeria.', theme: 'Familie', tags: ['family'] },
    { id: 'a1v014', word: 'Mutter', article: 'die', meaning: 'mother', example: 'Meine Mutter heißt Ada.', theme: 'Familie', tags: ['family'] },
    { id: 'a1v015', word: 'Vater', article: 'der', meaning: 'father', example: 'Mein Vater ist Ingenieur.', theme: 'Familie', tags: ['family'] },
    { id: 'a1v016', word: 'Bruder', article: 'der', meaning: 'brother', example: 'Mein Bruder studiert Medizin.', theme: 'Familie', tags: ['family'] },
    { id: 'a1v017', word: 'Schwester', article: 'die', meaning: 'sister', example: 'Meine Schwester wohnt in London.', theme: 'Familie', tags: ['family'] },
    { id: 'a1v018', word: 'Kind', article: 'das', meaning: 'child', example: 'Das Kind spielt im Garten.', theme: 'Familie', tags: ['family'] },
    // Theme: Essen & Trinken
    { id: 'a1v019', word: 'Brot', article: 'das', meaning: 'bread', example: 'Ich kaufe Brot beim Bäcker.', theme: 'Essen & Trinken', tags: ['food'] },
    { id: 'a1v020', word: 'Wasser', article: 'das', meaning: 'water', example: 'Ein Glas Wasser, bitte.', theme: 'Essen & Trinken', tags: ['food', 'drink'] },
    { id: 'a1v021', word: 'Kaffee', article: 'der', meaning: 'coffee', example: 'Ich trinke morgens Kaffee.', theme: 'Essen & Trinken', tags: ['drink'] },
    { id: 'a1v022', word: 'Tee', article: 'der', meaning: 'tea', example: 'Möchten Sie Tee oder Kaffee?', theme: 'Essen & Trinken', tags: ['drink'] },
    { id: 'a1v023', word: 'Milch', article: 'die', meaning: 'milk', example: 'Die Milch ist im Kühlschrank.', theme: 'Essen & Trinken', tags: ['drink', 'food'] },
    { id: 'a1v024', word: 'Fleisch', article: 'das', meaning: 'meat', example: 'Ich esse kein Fleisch.', theme: 'Essen & Trinken', tags: ['food'] },
    { id: 'a1v025', word: 'Obst', article: 'das', meaning: 'fruit', example: 'Obst ist gesund.', theme: 'Essen & Trinken', tags: ['food'] },
    { id: 'a1v026', word: 'Gemüse', article: 'das', meaning: 'vegetables', example: 'Ich koche Gemüse zum Abendessen.', theme: 'Essen & Trinken', tags: ['food'] },
    // Theme: Wohnung
    { id: 'a1v027', word: 'Wohnung', article: 'die', meaning: 'apartment', example: 'Die Wohnung hat drei Zimmer.', theme: 'Wohnung', tags: ['housing'] },
    { id: 'a1v028', word: 'Zimmer', article: 'das', meaning: 'room', example: 'Mein Zimmer ist groß.', theme: 'Wohnung', tags: ['housing'] },
    { id: 'a1v029', word: 'Küche', article: 'die', meaning: 'kitchen', example: 'Ich koche in der Küche.', theme: 'Wohnung', tags: ['housing'] },
    { id: 'a1v030', word: 'Bad', article: 'das', meaning: 'bathroom', example: 'Das Bad ist sauber.', theme: 'Wohnung', tags: ['housing'] },
    { id: 'a1v031', word: 'Miete', article: 'die', meaning: 'rent', example: 'Die Miete kostet 800 Euro.', theme: 'Wohnung', tags: ['housing', 'money'] },
    // Theme: Einkaufen
    { id: 'a1v032', word: 'Supermarkt', article: 'der', meaning: 'supermarket', example: 'Ich gehe zum Supermarkt.', theme: 'Einkaufen', tags: ['shopping'] },
    { id: 'a1v033', word: 'Preis', article: 'der', meaning: 'price', example: 'Was ist der Preis?', theme: 'Einkaufen', tags: ['shopping', 'money'] },
    { id: 'a1v034', word: 'billig', article: '', meaning: 'cheap', example: 'Das ist billig.', theme: 'Einkaufen', tags: ['shopping', 'adjective'] },
    { id: 'a1v035', word: 'teuer', article: '', meaning: 'expensive', example: 'Hamburg ist teuer.', theme: 'Einkaufen', tags: ['shopping', 'adjective'] },
    // Theme: Arbeit & Beruf
    { id: 'a1v036', word: 'Arbeit', article: 'die', meaning: 'work', example: 'Ich gehe zur Arbeit.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a1v037', word: 'Beruf', article: 'der', meaning: 'profession', example: 'Was ist Ihr Beruf?', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a1v038', word: 'Büro', article: 'das', meaning: 'office', example: 'Ich arbeite im Büro.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a1v039', word: 'Kollege', article: 'der', meaning: 'colleague (m)', example: 'Mein Kollege kommt aus Berlin.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a1v040', word: 'Chef', article: 'der', meaning: 'boss', example: 'Der Chef ist im Meeting.', theme: 'Arbeit & Beruf', tags: ['work'] },
    // Theme: Verkehr & Reisen
    { id: 'a1v041', word: 'Bahnhof', article: 'der', meaning: 'train station', example: 'Der Hauptbahnhof ist groß.', theme: 'Verkehr', tags: ['transport'] },
    { id: 'a1v042', word: 'Bus', article: 'der', meaning: 'bus', example: 'Der Bus kommt um 8 Uhr.', theme: 'Verkehr', tags: ['transport'] },
    { id: 'a1v043', word: 'U-Bahn', article: 'die', meaning: 'subway', example: 'Ich fahre mit der U-Bahn.', theme: 'Verkehr', tags: ['transport'] },
    { id: 'a1v044', word: 'Fahrkarte', article: 'die', meaning: 'ticket', example: 'Eine Fahrkarte nach Hamburg, bitte.', theme: 'Verkehr', tags: ['transport'] },
    { id: 'a1v045', word: 'Flughafen', article: 'der', meaning: 'airport', example: 'Der Flughafen ist weit.', theme: 'Verkehr', tags: ['transport'] },
    // Theme: Körper & Gesundheit
    { id: 'a1v046', word: 'Arzt', article: 'der', meaning: 'doctor', example: 'Ich gehe zum Arzt.', theme: 'Gesundheit', tags: ['health'] },
    { id: 'a1v047', word: 'Apotheke', article: 'die', meaning: 'pharmacy', example: 'Die Apotheke ist um die Ecke.', theme: 'Gesundheit', tags: ['health'] },
    { id: 'a1v048', word: 'krank', article: '', meaning: 'sick', example: 'Ich bin krank.', theme: 'Gesundheit', tags: ['health', 'adjective'] },
    { id: 'a1v049', word: 'Kopf', article: 'der', meaning: 'head', example: 'Mein Kopf tut weh.', theme: 'Gesundheit', tags: ['health', 'body'] },
    { id: 'a1v050', word: 'Termin', article: 'der', meaning: 'appointment', example: 'Ich habe einen Termin beim Arzt.', theme: 'Gesundheit', tags: ['health', 'time'] },
    // Theme: Hamburg specific
    { id: 'a1v051', word: 'Moin', article: '', meaning: 'Hello (Hamburg/North)', example: 'Moin! Wie geht\'s?', theme: 'Hamburg', tags: ['greeting', 'hamburg'] },
    { id: 'a1v052', word: 'Hafen', article: 'der', meaning: 'port / harbor', example: 'Der Hamburger Hafen ist berühmt.', theme: 'Hamburg', tags: ['hamburg'] },
    { id: 'a1v053', word: 'Anmeldung', article: 'die', meaning: 'city registration', example: 'Die Anmeldung ist beim Bürgeramt.', theme: 'Bürokratie', tags: ['bureaucracy', 'hamburg'] },
    { id: 'a1v054', word: 'Aufenthaltserlaubnis', article: 'die', meaning: 'residence permit', example: 'Ich brauche eine Aufenthaltserlaubnis.', theme: 'Bürokratie', tags: ['bureaucracy'] },
    { id: 'a1v055', word: 'Bürgeramt', article: 'das', meaning: 'citizens office', example: 'Das Bürgeramt öffnet um 8 Uhr.', theme: 'Bürokratie', tags: ['bureaucracy'] },
  ],
  A2: [
    { id: 'a2v001', word: 'Erfahrung', article: 'die', meaning: 'experience', example: 'Ich habe viel Erfahrung als Analyst.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a2v002', word: 'Bewerbung', article: 'die', meaning: 'application', example: 'Ich schreibe eine Bewerbung.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a2v003', word: 'Lebenslauf', article: 'der', meaning: 'CV / resume', example: 'Mein Lebenslauf ist aktuell.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a2v004', word: 'Gehalt', article: 'das', meaning: 'salary', example: 'Das Gehalt ist gut.', theme: 'Arbeit & Beruf', tags: ['work', 'money'] },
    { id: 'a2v005', word: 'Vertrag', article: 'der', meaning: 'contract', example: 'Ich unterschreibe den Vertrag.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a2v006', word: 'Mietvertrag', article: 'der', meaning: 'rental contract', example: 'Der Mietvertrag ist für zwei Jahre.', theme: 'Wohnung', tags: ['housing'] },
    { id: 'a2v007', word: 'Vermieter', article: 'der', meaning: 'landlord', example: 'Der Vermieter ist nett.', theme: 'Wohnung', tags: ['housing'] },
    { id: 'a2v008', word: 'Kaution', article: 'die', meaning: 'deposit', example: 'Die Kaution beträgt drei Monatsmieten.', theme: 'Wohnung', tags: ['housing', 'money'] },
    { id: 'a2v009', word: 'Krankenversicherung', article: 'die', meaning: 'health insurance', example: 'Die Krankenversicherung ist Pflicht.', theme: 'Bürokratie', tags: ['bureaucracy', 'health'] },
    { id: 'a2v010', word: 'Steuererklärung', article: 'die', meaning: 'tax return', example: 'Ich mache meine Steuererklärung.', theme: 'Bürokratie', tags: ['bureaucracy', 'money'] },
    { id: 'a2v011', word: 'Konto', article: 'das', meaning: 'account', example: 'Ich eröffne ein Konto bei der Sparkasse.', theme: 'Bank & Geld', tags: ['money'] },
    { id: 'a2v012', word: 'überweisen', article: '', meaning: 'to transfer (money)', example: 'Ich überweise die Miete.', theme: 'Bank & Geld', tags: ['money', 'verb'] },
    { id: 'a2v013', word: 'Ausbildung', article: 'die', meaning: 'training / education', example: 'Meine Ausbildung war in Nigeria.', theme: 'Bildung', tags: ['education'] },
    { id: 'a2v014', word: 'Prüfung', article: 'die', meaning: 'exam', example: 'Die Prüfung ist im Juni.', theme: 'Bildung', tags: ['education'] },
    { id: 'a2v015', word: 'bestehen', article: '', meaning: 'to pass (exam)', example: 'Ich möchte die Prüfung bestehen.', theme: 'Bildung', tags: ['education', 'verb'] },
    { id: 'a2v016', word: 'Umzug', article: 'der', meaning: 'move / relocation', example: 'Der Umzug nach Hamburg ist im Mai.', theme: 'Wohnung', tags: ['housing'] },
    { id: 'a2v017', word: 'Nachbar', article: 'der', meaning: 'neighbor', example: 'Mein Nachbar ist sehr freundlich.', theme: 'Wohnung', tags: ['housing'] },
    { id: 'a2v018', word: 'Einladung', article: 'die', meaning: 'invitation', example: 'Danke für die Einladung!', theme: 'Soziales', tags: ['social'] },
    { id: 'a2v019', word: 'Verabredung', article: 'die', meaning: 'appointment / date', example: 'Ich habe eine Verabredung um 18 Uhr.', theme: 'Soziales', tags: ['social', 'time'] },
    { id: 'a2v020', word: 'Feierabend', article: 'der', meaning: 'end of workday', example: 'Nach Feierabend gehe ich ins Fitnessstudio.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a2v021', word: 'Probezeit', article: 'die', meaning: 'probation period', example: 'Die Probezeit dauert sechs Monate.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a2v022', word: 'Besprechung', article: 'die', meaning: 'meeting', example: 'Die Besprechung ist um 10 Uhr.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a2v023', word: 'Urlaub', article: 'der', meaning: 'vacation / holiday', example: 'Ich habe 30 Tage Urlaub.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'a2v024', word: 'Rechnung', article: 'die', meaning: 'bill / invoice', example: 'Die Rechnung, bitte!', theme: 'Einkaufen', tags: ['shopping', 'money'] },
    { id: 'a2v025', word: 'Rezept', article: 'das', meaning: 'prescription / recipe', example: 'Der Arzt gibt mir ein Rezept.', theme: 'Gesundheit', tags: ['health'] },
  ],
  B1: [
    { id: 'b1v001', word: 'Vorstellungsgespräch', article: 'das', meaning: 'job interview', example: 'Das Vorstellungsgespräch lief gut.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'b1v002', word: 'Gehaltsverhandlung', article: 'die', meaning: 'salary negotiation', example: 'Die Gehaltsverhandlung war erfolgreich.', theme: 'Arbeit & Beruf', tags: ['work', 'money'] },
    { id: 'b1v003', word: 'Beförderung', article: 'die', meaning: 'promotion', example: 'Er hat eine Beförderung bekommen.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'b1v004', word: 'Umwelt', article: 'die', meaning: 'environment', example: 'Wir müssen die Umwelt schützen.', theme: 'Gesellschaft', tags: ['society'] },
    { id: 'b1v005', word: 'Meinung', article: 'die', meaning: 'opinion', example: 'Meiner Meinung nach ist das richtig.', theme: 'Kommunikation', tags: ['communication'] },
    { id: 'b1v006', word: 'Vorschlag', article: 'der', meaning: 'suggestion / proposal', example: 'Ich habe einen Vorschlag.', theme: 'Kommunikation', tags: ['communication'] },
    { id: 'b1v007', word: 'Beschwerde', article: 'die', meaning: 'complaint', example: 'Ich möchte eine Beschwerde einreichen.', theme: 'Kommunikation', tags: ['communication'] },
    { id: 'b1v008', word: 'Vereinbarung', article: 'die', meaning: 'agreement', example: 'Wir haben eine Vereinbarung getroffen.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'b1v009', word: 'Zusammenfassung', article: 'die', meaning: 'summary', example: 'Hier ist die Zusammenfassung des Berichts.', theme: 'Arbeit & Beruf', tags: ['work'] },
    { id: 'b1v010', word: 'Herausforderung', article: 'die', meaning: 'challenge', example: 'Das ist eine große Herausforderung.', theme: 'Allgemein', tags: ['general'] },
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
