// ═══════════════════════════════════════════════════════════════
// EXPANDED EXERCISES — 15+ per level per skill
// Goethe/TELC format aligned
// ═══════════════════════════════════════════════════════════════

export const READING_EX = {
  A1: [
    {id:'r-a1-01',title:'Wohnungsanzeige',type:'Goethe A1 Teil 1',
      text:'WOHNUNGSANZEIGE\n2-Zimmer-Wohnung in Hamburg-Altona\n55 m², 3. Stock, Balkon\nMiete: 750 € (warm)\nKaution: 2 Monatsmieten\nFrei ab: 01.06.2025\nKontakt: Herr Braun, Tel: 040-555-1234',
      questions:[{q:'How much is the rent?',opts:['550 €','750 €','1500 €','2 Monatsmieten'],ans:1},{q:'What floor?',opts:['1st','2nd','3rd','Ground'],ans:2},{q:'When is it available?',opts:['Now','June 2025','July 2025','Jan 2025'],ans:1}]},
    {id:'r-a1-02',title:'E-Mail vom Nachbarn',type:'Goethe A1 Teil 2',
      text:'Lieber Merrill,\nwillkommen in Hamburg! Ich bin dein Nachbar Thomas (4B).\nAm Samstag mache ich eine Party. Kommst du? 19 Uhr.\nBring etwas zu trinken mit!\nViele Grüße, Thomas',
      questions:[{q:'Who is Thomas?',opts:['Colleague','Neighbor','Teacher','Boss'],ans:1},{q:'When is the party?',opts:['Friday','Saturday','Sunday','Monday'],ans:1},{q:'What should you bring?',opts:['Food','Drinks','Music','Gift'],ans:1}]},
    {id:'r-a1-03',title:'Öffnungszeiten',type:'Goethe A1 Teil 1',
      text:'BÄCKEREI HANSEN\nÖffnungszeiten:\nMontag – Freitag: 6:00 – 18:30\nSamstag: 7:00 – 14:00\nSonntag: geschlossen\nFrisches Brot ab 6 Uhr!\nBestellungen: Tel. 040-789-456',
      questions:[{q:'When does the bakery close on weekdays?',opts:['14:00','18:00','18:30','20:00'],ans:2},{q:'Is it open on Sunday?',opts:['Yes, 7-14','Yes, 6-18','No, closed','Yes, until 12'],ans:2},{q:'When is fresh bread available?',opts:['From 5:00','From 6:00','From 7:00','From 8:00'],ans:1}]},
    {id:'r-a1-04',title:'Arztpraxis Schild',type:'Goethe A1 Teil 1',
      text:'DR. MED. PETRA SCHMIDT\nFachärztin für Allgemeinmedizin\nSprechzeiten:\nMo, Di, Do: 8:00 – 12:00 und 14:00 – 18:00\nMi: 8:00 – 12:00\nFr: 8:00 – 13:00\nTermine: Tel. 040-333-2211\nAkute Notfälle bitte ohne Termin',
      questions:[{q:'What kind of doctor is Dr. Schmidt?',opts:['Dentist','General practitioner','Eye doctor','Surgeon'],ans:1},{q:'On which day are there no afternoon hours?',opts:['Monday','Wednesday','Thursday','Friday'],ans:1},{q:'Do you always need an appointment?',opts:['Yes, always','No, emergencies without','Only on Mondays','Only mornings'],ans:1}]},
    {id:'r-a1-05',title:'Supermarkt Angebot',type:'Goethe A1 Teil 1',
      text:'ANGEBOTE DER WOCHE – EDEKA\nÄpfel (1 kg): 1,99 € (statt 2,49 €)\nVollmilch (1 L): 0,89 €\nBio-Eier (10 Stück): 3,29 €\nToastbrot: 1,19 €\nNur gültig bis Samstag!\nÖffnungszeiten: Mo–Sa 7–22 Uhr',
      questions:[{q:'How much do apples cost per kg?',opts:['2,49 €','1,99 €','3,29 €','1,19 €'],ans:1},{q:'Until when are the offers valid?',opts:['Friday','Saturday','Sunday','All week'],ans:1},{q:'When does the store close?',opts:['20:00','21:00','22:00','23:00'],ans:2}]},
    {id:'r-a1-06',title:'Notiz am Kühlschrank',type:'Goethe A1 Teil 2',
      text:'Lieber Merrill,\nich bin beim Einkaufen. Dein Mittagessen ist im Kühlschrank (Suppe). Bitte die Waschmaschine anmachen – die Wäsche ist schon drin.\nIch bin um 15 Uhr zurück.\nAnna',
      questions:[{q:'Where is the lunch?',opts:['On the table','In the fridge','In the oven','At the bakery'],ans:1},{q:'What should Merrill do?',opts:['Cook lunch','Go shopping','Start washing machine','Call Anna'],ans:2}]},
    {id:'r-a1-07',title:'HVV Fahrplan',type:'Goethe A1 Teil 1',
      text:'HVV – U3 Richtung Barmbek\nAb Landungsbrücken:\n06:12 – 06:22 – 06:32 – 06:42\nAlle 10 Minuten bis 22:00\nDanach alle 20 Minuten\nTageskarte: 8,20 €\nMonatskarte: 63,00 €',
      questions:[{q:'How often does the U3 run until 22:00?',opts:['Every 5 min','Every 10 min','Every 15 min','Every 20 min'],ans:1},{q:'How much is a day ticket?',opts:['6,20 €','7,20 €','8,20 €','9,20 €'],ans:2}]},
    {id:'r-a1-08',title:'Deutschkurs Anzeige',type:'Goethe A1 Teil 1',
      text:'DEUTSCHKURS A1\nVHS Hamburg-Mitte\nStart: 3. Februar 2025\nZeit: Mo + Mi, 18:00–20:15\nDauer: 12 Wochen\nPreis: 195 € (mit Ermäßigung: 95 €)\nAnmeldung online oder im Büro\nBitte mitbringen: Ausweis und Lehrbuch "Netzwerk neu A1"',
      questions:[{q:'When does the course start?',opts:['January','February','March','April'],ans:1},{q:'How much with discount?',opts:['45 €','95 €','145 €','195 €'],ans:1},{q:'What should you bring?',opts:['Laptop','ID and textbook','Photos','Certificate'],ans:1}]},
  ],
  A2: [
    {id:'r-a2-01',title:'VHS Deutschkurse',type:'Goethe A2 Teil 1',
      text:'HAMBURGER VHS — Deutschkurse\nIntensivkurs A1: Mo–Fr, 9–12:30 | 8 Wochen | 390 €\nAbendkurs A2: Di+Do, 18–20:30 | 16 Wochen | 280 €\nAnmeldung: Online oder im Büro (Mo–Fr 10–16)\nSie brauchen: Ausweis, Anmeldeformular\nErmäßigung: Bescheinigung vom Jobcenter',
      questions:[{q:'A1 intensive course duration?',opts:['4 weeks','8 weeks','12 weeks','16 weeks'],ans:1},{q:'What is needed for a discount?',opts:['Student ID','Jobcenter certificate','Bank statement','Passport'],ans:1},{q:'When can you register in person?',opts:['9-17','10-16','8-18','10-14'],ans:1}]},
    {id:'r-a2-02',title:'Arbeitsvertrag Info',type:'Goethe A2 Teil 2',
      text:'Wichtige Informationen zu Ihrem Arbeitsvertrag:\n- Probezeit: 6 Monate\n- Arbeitszeit: 40 Stunden/Woche\n- Urlaub: 28 Tage/Jahr\n- Gehalt: wird monatlich überwiesen\n- Krankmeldung: am ersten Tag beim Arbeitgeber, ab dem dritten Tag mit ärztlichem Attest\n- Kündigungsfrist: 4 Wochen zum Monatsende',
      questions:[{q:'How long is the probation period?',opts:['3 months','4 months','6 months','12 months'],ans:2},{q:'When do you need a doctor\'s note?',opts:['Day 1','Day 2','Day 3','Day 5'],ans:2},{q:'How many vacation days?',opts:['20','24','28','30'],ans:2}]},
    {id:'r-a2-03',title:'Wohnungsbesichtigung',type:'Goethe A2 Teil 2',
      text:'Hallo Herr Ejike,\nvielen Dank für Ihr Interesse an der Wohnung in der Schillerstraße 24.\nDie Besichtigung ist am Donnerstag, 15. Mai um 16:30 Uhr.\nBitte bringen Sie folgende Unterlagen mit:\n- Personalausweis oder Reisepass\n- Einkommensnachweise (letzte 3 Monate)\n- SCHUFA-Auskunft\n- Mietschuldenfreiheitsbescheinigung\nMit freundlichen Grüßen\nImmobilien Petersen GmbH',
      questions:[{q:'When is the viewing?',opts:['Wednesday','Thursday','Friday','Saturday'],ans:1},{q:'What is NOT required?',opts:['ID','Income proof','SCHUFA','Bank account'],ans:3},{q:'What time?',opts:['14:30','15:30','16:30','17:30'],ans:2}]},
    {id:'r-a2-04',title:'Mülltrennung Aushang',type:'Goethe A2 Teil 1',
      text:'MÜLLTRENNUNG – Bitte beachten!\nBlaue Tonne: Papier und Pappe\nGelber Sack: Verpackungen (Plastik, Dosen)\nBraune Tonne: Bioabfall (Essensreste, Gartenabfall)\nSchwarze Tonne: Restmüll\nGlascontainer: Altglas (nach Farben sortiert!)\nAbholung: Dienstag und Freitag ab 6 Uhr\nBitte die Tonnen am Vorabend rausstellen!',
      questions:[{q:'Where does plastic go?',opts:['Blue bin','Yellow bag','Brown bin','Black bin'],ans:1},{q:'When is collection?',opts:['Mon + Thu','Tue + Fri','Wed + Sat','Daily'],ans:1},{q:'What goes in the brown bin?',opts:['Paper','Plastic','Food waste','Glass'],ans:2}]},
    {id:'r-a2-05',title:'Krankschreibung E-Mail',type:'Goethe A2 Teil 2',
      text:'Betreff: Krankmeldung – Merrill Ejike\n\nSehr geehrter Herr Weber,\n\nich möchte mich für heute und morgen krankmelden. Ich habe starke Kopfschmerzen und Fieber. Ich war heute beim Arzt und bin bis Freitag krankgeschrieben.\n\nDie Krankschreibung schicke ich per Post.\n\nIch hoffe, dass ich am Montag wieder arbeiten kann.\n\nMit freundlichen Grüßen\nMerrill Ejike',
      questions:[{q:'How long is Merrill sick?',opts:['1 day','2 days','Until Friday','Until Monday'],ans:2},{q:'What are his symptoms?',opts:['Stomach pain','Headache and fever','Back pain','Cough'],ans:1},{q:'When does he plan to return?',opts:['Thursday','Friday','Monday','Next week'],ans:2}]},
  ],
  B1: [
    {id:'r-b1-01',title:'Homeoffice Artikel',type:'Goethe B1 Teil 2',
      text:'HOMEOFFICE: FLUCH ODER SEGEN?\n\n60% der Arbeitnehmer arbeiten mindestens einen Tag pro Woche im Homeoffice. Die Vorteile liegen auf der Hand: kein Pendeln, flexible Zeiteinteilung und mehr Zeit für die Familie.\n\nAllerdings berichten viele auch von Nachteilen: fehlender Kontakt zu Kollegen, Schwierigkeiten bei der Trennung von Arbeit und Privatleben und manchmal auch Einsamkeit.\n\nExperten empfehlen das hybride Modell — eine Mischung aus Büro- und Heimarbeit.',
      questions:[{q:'What percentage works from home weekly?',opts:['40%','50%','60%','70%'],ans:2},{q:'Which is NOT a disadvantage mentioned?',opts:['Loneliness','Less colleague contact','Lower salary','Work-life balance'],ans:2},{q:'What do experts recommend?',opts:['Only office','Only home','Hybrid model','4-day week'],ans:2}]},
    {id:'r-b1-02',title:'Integration Bericht',type:'Goethe B1 Teil 2',
      text:'INTEGRATION DURCH SPRACHE\n\nEine neue Studie der Universität Hamburg zeigt: Migranten, die mindestens B1-Niveau in Deutsch erreichen, finden doppelt so schnell eine qualifizierte Arbeitsstelle.\n\n"Sprache ist der Schlüssel zur Integration", sagt Prof. Dr. Klein. "Nicht nur für den Arbeitsmarkt, sondern auch für soziale Kontakte und das Verständnis der Kultur."\n\nDie Bundesregierung plant, die Integrationskurse um 100 Stunden zu verlängern und mehr berufsbezogene Sprachkurse anzubieten.',
      questions:[{q:'What do migrants with B1 find faster?',opts:['Housing','Friends','Qualified jobs','Citizenship'],ans:2},{q:'What does Prof. Klein call language?',opts:['A tool','The key to integration','A hobby','Optional'],ans:1},{q:'What does the government plan?',opts:['Fewer courses','Shorter courses','Longer courses','Online only'],ans:2}]},
    {id:'r-b1-03',title:'Beschwerde im Forum',type:'TELC B1 Teil 3',
      text:'FORUM: Probleme mit dem Vermieter\n\nUser: hamburger_mieter_2025\n\nHallo zusammen, ich habe ein großes Problem. Seit zwei Monaten funktioniert meine Heizung nicht richtig. Ich habe den Vermieter dreimal angeschrieben, aber er reagiert nicht. Die Wohnung ist nur noch 16 Grad warm!\n\nIch habe gelesen, dass man die Miete kürzen darf, wenn der Vermieter Mängel nicht repariert. Stimmt das? Hat jemand Erfahrung damit? Sollte ich zum Mieterverein gehen?\n\nDanke für eure Hilfe!',
      questions:[{q:'What is the main problem?',opts:['Noise','Heating not working','Rent too high','Neighbor conflict'],ans:1},{q:'How many times was the landlord contacted?',opts:['Once','Twice','Three times','Not yet'],ans:2},{q:'What does the user consider doing?',opts:['Moving out','Calling police','Reducing rent','Breaking the lease'],ans:2}]},
  ],
};

export const WRITING_EX = {
  A1: [
    {id:'w-a1-01',title:'Formular ausfüllen',type:'Goethe A1 Teil 1',
      instruction:'Fill in the registration form with your personal information.',
      fields:['Vorname','Nachname','Geburtsdatum','Geburtsort','Staatsangehörigkeit','Adresse','Telefonnummer','E-Mail','Beruf','Familienstand'],
      tips:'In Goethe A1, Part 1 asks you to fill in a form. Practice: date = DD.MM.YYYY, phone with country code.'},
    {id:'w-a1-02',title:'Kurze Nachricht',type:'Goethe A1 Teil 2',
      instruction:'Write a short message (~30 words) to colleague Thomas: Thank for invitation, say you are coming, ask what to bring.',
      sample:'Lieber Thomas,\n\nvielen Dank für die Einladung! Ich komme gern am Samstag. Was soll ich mitbringen? Essen oder Getränke?\n\nViele Grüße\nMerrill',
      tips:'Always: greeting (Lieber/Liebe), answer ALL points, closing (Viele Grüße + name). Short sentences are fine!'},
    {id:'w-a1-03',title:'Krankmeldung SMS',type:'Goethe A1 Teil 2',
      instruction:'Write a short message (~30 words) to your boss: You are sick, cannot come to work today, will see the doctor, hope to come back tomorrow.',
      sample:'Sehr geehrter Herr Weber,\n\nleider bin ich heute krank. Ich kann nicht zur Arbeit kommen. Ich gehe zum Arzt. Morgen komme ich hoffentlich wieder.\n\nMit freundlichen Grüßen\nMerrill Ejike',
      tips:'Formal: Sehr geehrter.../Mit freundlichen Grüßen. Say what happened, what you\'ll do, when you\'ll return.'},
    {id:'w-a1-04',title:'Postkarte aus dem Urlaub',type:'TELC A1',
      instruction:'Write a postcard (~30 words) to a friend: Where are you? How is the weather? What do you do? When do you come back?',
      sample:'Liebe Sarah,\n\nviele Grüße aus Hamburg! Das Wetter ist sonnig und warm. Ich besuche den Hafen und esse viel Fisch. Am Sonntag komme ich zurück.\n\nDein Merrill',
      tips:'Postcard style: short, friendly. Cover all points. Use present tense.'},
  ],
  A2: [
    {id:'w-a2-01',title:'Persönliche E-Mail',type:'Goethe A2',
      instruction:'Write to a friend (~50 words). You moved to Hamburg. Write about: 1) your apartment, 2) your new job, 3) invite them to visit.',
      sample:'Liebe Anna,\n\nich bin jetzt in Hamburg! Meine Wohnung ist in Altona — klein aber gemütlich, mit Balkon.\n\nMeine Arbeit bei adjoe gefällt mir. Die Kollegen sind nett und ich lerne viel.\n\nKommst du mich besuchen? Im Sommer ist Hamburg besonders schön!\n\nLiebe Grüße\nMerrill',
      tips:'Address all 3 points. Use connectors: und, aber, auch. Show Perfekt and Dativ.'},
    {id:'w-a2-02',title:'Termin absagen',type:'TELC A2',
      instruction:'Write an email (~50 words) to the dentist: Cancel your appointment on Thursday. Give a reason. Ask for a new appointment next week.',
      sample:'Sehr geehrte Damen und Herren,\n\nleider muss ich meinen Termin am Donnerstag absagen. Ich habe an diesem Tag eine wichtige Besprechung.\n\nKönnen Sie mir bitte einen neuen Termin nächste Woche geben? Am besten nachmittags.\n\nMit freundlichen Grüßen\nMerrill Ejike',
      tips:'Formal email: cancel + reason + new request. Konjunktiv is a bonus (Könnte ich...?).'},
    {id:'w-a2-03',title:'Nachricht an den Vermieter',type:'Goethe A2',
      instruction:'Write to your landlord (~50 words): The washing machine is broken. Describe the problem. Ask when it will be repaired.',
      sample:'Sehr geehrter Herr Petersen,\n\nseit Montag funktioniert die Waschmaschine nicht mehr. Sie macht laute Geräusche und das Wasser läuft nicht ab.\n\nKönnten Sie bitte einen Techniker schicken? Wann kann die Maschine repariert werden?\n\nMit freundlichen Grüßen\nMerrill Ejike',
      tips:'Formal. Describe problem clearly. Be polite with Konjunktiv II: Könnten Sie...?'},
  ],
  B1: [
    {id:'w-b1-01',title:'Formelle Beschwerde',type:'Goethe B1',
      instruction:'Write a formal complaint (~80 words) to internet provider. Internet down 3 days. Describe problem, request solution, set deadline.',
      sample:'Sehr geehrte Damen und Herren,\n\nseit drei Tagen funktioniert mein Internet nicht mehr. Ich habe bereits den Router neu gestartet, aber das Problem besteht weiterhin.\n\nDa ich das Internet für meine Arbeit im Homeoffice brauche, bitte ich Sie dringend, das Problem bis spätestens Freitag zu lösen. Andernfalls muss ich den Vertrag kündigen.\n\nMit freundlichen Grüßen\nMerrill Ejike\nKundennummer: 12345',
      tips:'Formal: Sehr geehrte.../MfG. Use Konjunktiv II. Structure: problem → impact → request → consequence.'},
    {id:'w-b1-02',title:'Meinung im Forum',type:'TELC B1',
      instruction:'Write a forum post (~80 words): Should companies offer free German courses to foreign employees? Give your opinion with reasons.',
      sample:'Meiner Meinung nach sollten Unternehmen kostenlose Deutschkurse anbieten. Erstens hilft es bei der Integration in das Team. Wenn alle dieselbe Sprache sprechen, funktioniert die Kommunikation besser.\n\nZweitens zeigt es, dass die Firma ihre Mitarbeiter wertschätzt. Das steigert die Motivation.\n\nAllerdings sollte der Kurs während der Arbeitszeit stattfinden, da viele Mitarbeiter nach der Arbeit keine Zeit haben.',
      tips:'Structure: Meinung → Argument 1 → Argument 2 → Einschränkung. Use: erstens, zweitens, allerdings, deshalb.'},
  ],
};

export const SPEAKING_EX = {
  A1: [
    {id:'s-a1-01',title:'Sich vorstellen',type:'Goethe A1 Teil 1',
      instruction:'Introduce yourself. Cover all cards.',
      cards:['Name?','Woher?','Wohnort?','Beruf?','Sprachen?','Hobbys?'],
      sample:'Ich heiße Merrill. Ich komme aus Nigeria. Jetzt wohne ich in Hamburg. Ich bin Data Analyst von Beruf. Ich spreche Englisch und ich lerne Deutsch. Meine Hobbys sind Programmieren und Lesen.',
      tips:'Simple sentences: Ich heiße... Ich komme aus... Each card = 1-2 sentences.'},
    {id:'s-a1-02',title:'Um etwas bitten',type:'Goethe A1 Teil 2',
      instruction:'Practice asking for things politely.',
      cards:['Ein Glas Wasser','Die Speisekarte','Die Rechnung','Ein Formular','Einen Termin','Die Telefonnummer'],
      sample:'Entschuldigung, kann ich bitte ein Glas Wasser haben? / Können Sie mir bitte die Speisekarte geben? / Ich hätte gerne die Rechnung, bitte.',
      tips:'Key: Kann ich bitte...? / Können Sie mir...geben? / Ich hätte gerne... / Entschuldigung, wo ist...?'},
    {id:'s-a1-03',title:'Einkaufen',type:'Goethe A1 Teil 3',
      instruction:'Role play: You are at a bakery. Buy bread, ask the price, pay.',
      cards:['Begrüßung','Was möchten Sie?','Wie viel?','Preis fragen','Bezahlen','Verabschiedung'],
      sample:'Guten Tag! — Ich hätte gerne zwei Brötchen und ein Brot, bitte. — Was kostet das? — Hier sind fünf Euro. — Danke, auf Wiedersehen!',
      tips:'Practice the flow: greet → ask → quantity → price → pay → bye. Use "Ich hätte gerne..."'},
  ],
  A2: [
    {id:'s-a2-01',title:'Über den Alltag',type:'Goethe A2',
      instruction:'Describe your daily routine. Use time expressions and separable verbs.',
      cards:['Morgens','Auf der Arbeit','Mittagspause','Nach der Arbeit','Abends','Am Wochenende'],
      sample:'Morgens stehe ich um 7 Uhr auf. Dann frühstücke ich und fahre mit der U-Bahn zur Arbeit. Im Büro arbeite ich mit Daten. In der Mittagspause esse ich in der Kantine. Nach der Arbeit gehe ich ins Fitnessstudio. Abends koche ich und lerne Deutsch.',
      tips:'Use: dann, danach, zuerst, manchmal, oft. Show separable verbs: aufstehen, anfangen.'},
    {id:'s-a2-02',title:'Eine Reise planen',type:'TELC A2',
      instruction:'Plan a trip with a friend. Discuss destination, transport, accommodation, activities.',
      cards:['Wohin?','Wie reisen?','Wo übernachten?','Was machen?','Wie lange?','Was mitnehmen?'],
      sample:'Ich schlage vor, dass wir nach Berlin fahren. Wir können mit dem Zug fahren — das dauert nur 2 Stunden. Wir übernachten in einem Hotel. Ich möchte das Brandenburger Tor sehen und Currywurst essen!',
      tips:'Use: Ich schlage vor... Wie wäre es mit...? Wir könnten... Show Konjunktiv II for suggestions.'},
  ],
  B1: [
    {id:'s-b1-01',title:'Meinung äußern',type:'Goethe B1',
      instruction:'Express opinion: "Should companies require employees to learn the local language?"',
      cards:['Dafür (For)','Dagegen (Against)','Persönliche Erfahrung','Kompromiss / Lösung'],
      sample:'Meiner Meinung nach ist es wichtig, die Sprache des Landes zu lernen. Einerseits hilft es bei der Integration. Andererseits braucht man Zeit. Aus meiner Erfahrung kann ich sagen, dass Deutschlernen mir hilft, mich in Hamburg wohl zu fühlen. Ich denke, Unternehmen sollten Kurse anbieten, aber keine Perfektion erwarten.',
      tips:'Structure: Meiner Meinung nach... Einerseits...andererseits... Aus meiner Erfahrung... Use Konjunktiv II.'},
    {id:'s-b1-02',title:'Präsentation halten',type:'TELC B1',
      instruction:'Give a short presentation about: "Advantages and disadvantages of living abroad"',
      cards:['Einleitung (Intro)','Vorteile','Nachteile','Eigene Erfahrung','Zusammenfassung'],
      sample:'Ich möchte heute über das Thema "Leben im Ausland" sprechen. Die Vorteile sind: man lernt eine neue Kultur kennen und wird unabhängiger. Die Nachteile sind: man vermisst Familie und Freunde. Aus meiner Erfahrung als Nigerianer in Hamburg kann ich sagen, dass die Vorteile überwiegen. Vielen Dank für Ihre Aufmerksamkeit.',
      tips:'Formal structure: Intro → Points → Personal → Conclusion. Use: Erstens, Zweitens, Zusammenfassend.'},
  ],
};

export const LISTENING_EX = {
  A1: [
    {id:'l-a1-01',title:'Bahnhofsdurchsage',type:'Goethe A1 Hören Teil 1',
      transcript:'Achtung, eine Durchsage: Der ICE 790 nach Hamburg Hauptbahnhof fährt heute von Gleis 14 ab. Ich wiederhole: Gleis 14. Abfahrt um 10 Uhr 35. Bitte beachten Sie die Gleisänderung.',
      questions:[{q:'Destination?',opts:['Berlin','Hamburg','München','Frankfurt'],ans:1},{q:'Platform?',opts:['4','10','14','35'],ans:2},{q:'Departure time?',opts:['10:14','10:30','10:35','14:35'],ans:2}]},
    {id:'l-a1-02',title:'Telefongespräch Arzt',type:'Goethe A1 Hören Teil 2',
      transcript:'Praxis Dr. Schmidt, guten Tag.\n— Guten Tag, hier ist Merrill Ejike. Ich möchte bitte einen Termin machen.\n— Wann passt es Ihnen? Montag um 10 oder Mittwoch um 14 Uhr?\n— Mittwoch um 14 Uhr, bitte.\n— Bringen Sie bitte Ihre Versichertenkarte mit.\n— Mache ich. Danke!',
      questions:[{q:'Where is Merrill calling?',opts:['Restaurant','Doctor\'s office','School','Bank'],ans:1},{q:'Which appointment?',opts:['Mon 10:00','Wed 14:00','Tue 10:00','Thu 14:00'],ans:1},{q:'What should he bring?',opts:['Passport','Insurance card','Money','Letter'],ans:1}]},
    {id:'l-a1-03',title:'Im Supermarkt',type:'TELC A1 Hören',
      transcript:'Liebe Kunden, willkommen bei EDEKA! Heute im Angebot: Deutsche Äpfel, ein Kilo nur 1,99 Euro. Und Vollmilch für 89 Cent. Sie finden die Angebote in Gang 3. Wir schließen heute um 20 Uhr. Wir wünschen Ihnen einen schönen Einkauf!',
      questions:[{q:'How much are apples per kg?',opts:['0,89 €','1,49 €','1,99 €','2,99 €'],ans:2},{q:'Where are the offers?',opts:['Aisle 1','Aisle 2','Aisle 3','Aisle 4'],ans:2},{q:'When does the store close?',opts:['18:00','19:00','20:00','21:00'],ans:2}]},
  ],
  A2: [
    {id:'l-a2-01',title:'Wetterbericht',type:'Goethe A2 Hören',
      transcript:'Das Wetter für Hamburg: Heute Nachmittag bewölkt, 15 Grad. Am Abend Regen. Morgen früh Nebel, nachmittags Sonne, 18 Grad. Am Wochenende trocken und sonnig, bis 22 Grad.',
      questions:[{q:'Today\'s afternoon?',opts:['Sunny','Cloudy','Rainy','Foggy'],ans:1},{q:'Tomorrow morning?',opts:['Sun','Rain','Fog','Snow'],ans:2},{q:'Weekend?',opts:['Rainy','Dry and sunny','Cold','Stormy'],ans:1}]},
    {id:'l-a2-02',title:'Telefonat mit Vermieter',type:'TELC A2 Hören',
      transcript:'Herr Ejike, hier ist Petersen von der Hausverwaltung. Ich rufe wegen Ihrer Heizung an. Der Techniker kann am Donnerstag zwischen 10 und 12 Uhr kommen. Sind Sie dann zu Hause? Bitte rufen Sie mich zurück unter 040-555-7890.',
      questions:[{q:'Who is calling?',opts:['Doctor','Property manager','Boss','Neighbor'],ans:1},{q:'When is the technician coming?',opts:['Monday','Wednesday','Thursday','Friday'],ans:2},{q:'What should Merrill do?',opts:['Send email','Call back','Go to office','Wait'],ans:1}]},
  ],
  B1: [
    {id:'l-b1-01',title:'Interview Personalchef',type:'Goethe B1 Hören',
      transcript:'Moderator: Herr Müller, was ist Ihnen bei Bewerbern am wichtigsten?\nMüller: Motivation. Noten sind wichtig, aber Begeisterung merkt man sofort.\nModerator: Typische Fehler?\nMüller: Viele informieren sich nicht über das Unternehmen. Außerdem: pünktlich sein und angemessene Kleidung tragen.',
      questions:[{q:'Most important quality?',opts:['Grades','Experience','Motivation','Languages'],ans:2},{q:'Typical mistake?',opts:['Arriving early','Not researching company','Asking about salary','Being too formal'],ans:1},{q:'Other recommendation?',opts:['Bring gift','Be punctual, dress well','Speak only German','Send follow-up'],ans:1}]},
  ],
};

// ─── GUIDED LESSONS (Day-by-day progression) ───
export const GUIDED_LESSONS = [
  {id:'L01',title:'Tag 1: Hallo!',level:'A1',desc:'Greetings, alphabet basics, your first German words',
    steps:[
      {type:'info',content:'Welcome to German! Today you\'ll learn to greet people and introduce yourself.'},
      {type:'vocab',wordIds:['a1-011','a1-012','a1-013','a1-015','a1-016','a1-017','a1-018','a1-019']},
      {type:'info',content:'🎯 Key phrases:\n• Hallo! — Hello!\n• Guten Tag! — Good day!\n• Wie heißen Sie? — What is your name?\n• Ich heiße Merrill. — My name is Merrill.\n• Tschüss! — Bye!'},
      {type:'quiz',questions:[
        {q:'How do you say "Good morning"?',opts:['Guten Abend','Guten Morgen','Gute Nacht','Guten Tag'],ans:1},
        {q:'How do you say "Goodbye" formally?',opts:['Tschüss','Moin','Auf Wiedersehen','Hallo'],ans:2},
        {q:'"Ich heiße Merrill" means:',opts:['I live in Hamburg','I am a teacher','My name is Merrill','I speak German'],ans:2},
      ]},
    ]},
  {id:'L02',title:'Tag 2: Zahlen 1-20',level:'A1',desc:'Learn to count, say your phone number, and ask about prices',
    steps:[
      {type:'info',content:'Numbers are essential! You\'ll need them for prices, phone numbers, addresses, and telling time.'},
      {type:'info',content:'1-10: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn\n11-12: elf, zwölf\n13-19: drei+zehn = dreizehn, vier+zehn = vierzehn...\n20: zwanzig'},
      {type:'drill',drillType:'numbers',range:[1,20]},
      {type:'quiz',questions:[
        {q:'What is "fünfzehn"?',opts:['5','14','15','50'],ans:2},
        {q:'How do you say 12?',opts:['zehn','elf','zwölf','dreizehn'],ans:2},
        {q:'What is "sieben"?',opts:['6','7','8','9'],ans:1},
      ]},
    ]},
  {id:'L03',title:'Tag 3: Im Café',level:'A1',desc:'Order food and drinks, ask for the bill, be polite',
    steps:[
      {type:'info',content:'Time to order your first coffee in German! Key phrases for cafés and restaurants.'},
      {type:'vocab',wordIds:['a1-003','a1-004','a1-093','a1-094','a1-092','a1-091','a1-076']},
      {type:'info',content:'🎯 Ordering pattern:\n• Ich hätte gerne... (I would like...)\n• Ein Kaffee, bitte. (A coffee, please.)\n• Die Rechnung, bitte. (The bill, please.)\n• Was kostet das? (How much is that?)\n• Danke schön! (Thank you!)'},
      {type:'quiz',questions:[
        {q:'How do you politely order coffee?',opts:['Kaffee!','Ich hätte gerne einen Kaffee','Gib mir Kaffee','Wo ist Kaffee?'],ans:1},
        {q:'"Die Rechnung, bitte" means:',opts:['The menu please','The receipt','The bill please','The coffee'],ans:2},
      ]},
    ]},
  {id:'L04',title:'Tag 4: Meine Familie',level:'A1',desc:'Talk about your family, ages, relationships',
    steps:[
      {type:'info',content:'Family is one of the first topics in any language. Learn to talk about your loved ones.'},
      {type:'vocab',wordIds:['a1-060','a1-061','a1-062','a1-063','a1-064','a1-065','a1-066','a1-067','a1-068','a1-069','a1-070']},
      {type:'quiz',questions:[
        {q:'What is "die Schwester"?',opts:['Brother','Mother','Sister','Daughter'],ans:2},
        {q:'What article does "Kind" take?',opts:['der','die','das','dem'],ans:2},
        {q:'"Mein Vater ist Ingenieur" means:',opts:['My father is tall','My father is an engineer','My brother is a doctor','My friend is nice'],ans:1},
      ]},
    ]},
  {id:'L05',title:'Tag 5: der, die, das',level:'A1',desc:'The most important grammar rule: noun genders and articles',
    steps:[
      {type:'info',content:'Every German noun has a gender: masculine (der), feminine (die), or neuter (das). This is THE most important thing to learn early.\n\n🔴 der = masculine: der Mann, der Tisch, der Bahnhof\n🔵 die = feminine: die Frau, die Küche, die Arbeit\n🟢 das = neuter: das Kind, das Haus, das Büro\n\n📌 Plural is always "die": die Männer, die Frauen, die Kinder'},
      {type:'info',content:'Helpful patterns:\n• -ung, -heit, -keit, -schaft, -tion → die (feminine)\n• -chen, -lein → das (neuter)\n• -er (agent nouns) → often der (masculine)\n\nBUT: you must memorize the article with every noun!'},
      {type:'quiz',questions:[
        {q:'___ Wohnung (apartment)',opts:['der','die','das'],ans:1},
        {q:'___ Büro (office)',opts:['der','die','das'],ans:2},
        {q:'___ Bahnhof (train station)',opts:['der','die','das'],ans:0},
        {q:'___ Freiheit (freedom)',opts:['der','die','das'],ans:1},
        {q:'What is the plural article?',opts:['der','die','das','den'],ans:1},
      ]},
    ]},
  {id:'L06',title:'Tag 6: Ich, du, er, sie...',level:'A1',desc:'Personal pronouns and present tense verb conjugation',
    steps:[
      {type:'info',content:'German verbs change form based on the subject:\n\nich mache (I do)\ndu machst (you do - informal)\ner/sie/es macht (he/she/it does)\nwir machen (we do)\nihr macht (you all do)\nsie/Sie machen (they/you formal do)'},
      {type:'info',content:'Pattern: stem + ending\nmach-en → ich mach-e, du mach-st, er mach-t\n\nImportant irregulars:\nsein: bin, bist, ist, sind, seid, sind\nhaben: habe, hast, hat, haben, habt, haben'},
      {type:'quiz',questions:[
        {q:'Ich ___ in Hamburg. (wohnen)',opts:['wohne','wohnst','wohnt'],ans:0},
        {q:'Er ___ Deutsch. (lernen)',opts:['lerne','lernst','lernt'],ans:2},
        {q:'Wir ___ Kaffee. (trinken)',opts:['trinke','trinkt','trinken'],ans:2},
        {q:'Du ___ nett. (sein)',opts:['bin','bist','ist'],ans:1},
      ]},
    ]},
  {id:'L07',title:'Tag 7: Wochenende!',level:'A1',desc:'Days of the week, telling time, making plans',
    steps:[
      {type:'vocab',wordIds:['a1-049','a1-050','a1-051','a1-052','a1-053','a1-054','a1-055','a1-041','a1-046','a1-047','a1-048']},
      {type:'info',content:'Telling time:\n• Wie spät ist es? — What time is it?\n• Es ist drei Uhr. — It\'s 3 o\'clock.\n• Es ist halb vier. — It\'s 3:30 (half of four!)\n• Um 8 Uhr — At 8 o\'clock\n\n⚠️ German "halb" means half TO the next hour, not half PAST!'},
      {type:'quiz',questions:[
        {q:'What day comes after Mittwoch?',opts:['Dienstag','Donnerstag','Freitag','Montag'],ans:1},
        {q:'"Halb vier" means:',opts:['4:00','4:30','3:30','3:00'],ans:2},
        {q:'"Gestern" means:',opts:['Today','Tomorrow','Yesterday','Always'],ans:2},
      ]},
    ]},
];

// ─── NUMBER DRILL DATA ───
export const NUMBER_WORDS = {
  0:'null',1:'eins',2:'zwei',3:'drei',4:'vier',5:'fünf',6:'sechs',7:'sieben',8:'acht',9:'neun',
  10:'zehn',11:'elf',12:'zwölf',13:'dreizehn',14:'vierzehn',15:'fünfzehn',16:'sechzehn',17:'siebzehn',18:'achtzehn',19:'neunzehn',
  20:'zwanzig',21:'einundzwanzig',22:'zweiundzwanzig',30:'dreißig',40:'vierzig',50:'fünfzig',60:'sechzig',70:'siebzig',80:'achtzig',90:'neunzig',
  100:'hundert',200:'zweihundert',1000:'tausend',
};

export function numberToGerman(n) {
  if (n <= 20 || NUMBER_WORDS[n]) return NUMBER_WORDS[n] || '';
  if (n < 100) {
    const tens = Math.floor(n / 10) * 10;
    const ones = n % 10;
    if (ones === 0) return NUMBER_WORDS[tens];
    return `${NUMBER_WORDS[ones]}und${NUMBER_WORDS[tens]}`;
  }
  if (n < 1000) {
    const hundreds = Math.floor(n / 100);
    const rest = n % 100;
    const hStr = hundreds === 1 ? 'hundert' : `${NUMBER_WORDS[hundreds]}hundert`;
    return rest === 0 ? hStr : `${hStr}${numberToGerman(rest)}`;
  }
  return `${numberToGerman(Math.floor(n/1000))}tausend${n%1000 === 0 ? '' : numberToGerman(n%1000)}`;
}
