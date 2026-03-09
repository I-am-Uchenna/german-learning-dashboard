// Goethe-Zertifikat A1: Start Deutsch 1 — Modellsatz (Official Exam)
// Parsed from official Goethe-Institut PDF (8. Auflage, Feb 2024)
// Structure: Hören (3 Teile, 15 Fragen), Lesen (3 Teile, 15 Fragen), Schreiben (2 Teile), Sprechen (3 Teile)

export const GOETHE_A1_EXAM = {
  meta: {
    title: "Goethe-Zertifikat A1: Start Deutsch 1",
    subtitle: "Modellsatz — Offizielle Übungsprüfung",
    totalTime: 80, // minutes (Hören 20 + Lesen 25 + Schreiben 20 + Sprechen 15)
    passing: 60, // percent
    maxPoints: 45, // Hören 15 + Lesen 15 + Schreiben 15
    sections: ["hoeren","lesen","schreiben","sprechen"],
  },

  // ═══════════════════════════════════════════
  // HÖREN — circa 20 Minuten, 15 Punkte
  // ═══════════════════════════════════════════
  hoeren: {
    title: "Hören", time: 20, points: 15,
    instructions: "Dieser Test hat drei Teile. Sie hören kurze Gespräche und Ansagen. Zu jedem Text gibt es eine Aufgabe. Lesen Sie zuerst die Aufgabe, hören Sie dann den Text dazu.",
    teil1: {
      instructions: "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      type: "abc",
      questions: [
        { num:1, q:"Was kostet der Pullover?", opts:["Dreißig Euro","Fünfundneunzig Euro","Neunzehn Euro fünfundneunzig Cent"], ans:2,
          transcript:"Kunde: Entschuldigung, was kostet dieser Pullover jetzt? Da steht 30 Prozent billiger.\nVerkäuferin: Einen Moment bitte… neunzehnfünfundneunzig.\nKunde: 19,95 Euro?\nVerkäuferin: Ja, Euro natürlich.\nKunde: Hm, … ok, den nehme ich." },
        { num:2, q:"Wie spät ist es?", opts:["15 Uhr","Gleich 5 Uhr","Halb 5 Uhr"], ans:1,
          transcript:"Passant: Ach, entschuldigen Sie bitte.\nPassantin: Ja bitte.\nPassant: Haben Sie eine Uhr? … Wie spät ist es bitte?\nPassantin: Ja – jetzt ist es gleich 5 Uhr.\nPassant: Was, schon 5. Vielen Dank, Wiedersehen." },
        { num:3, q:"Was isst die Frau im Restaurant?", opts:["Pommes","Fisch","Wurst"], ans:0,
          transcript:"Kellner: Was wünschen Sie bitte?\nGast: Ich hätte gern die Salatplatte und ein...\nKellner: Entschuldigung, die Salatplatte ist leider aus, aber die Bratwurst kann ich Ihnen empfehlen… ganz frisch heute.\nGast: Nein danke... ich esse kein Fleisch. Gibt es etwas ohne Fleisch?\nKellner: Ja... nicht mehr viel: Fisch oder... Pommes.\nGast: Fisch... hm... Tja, dann wohl die Pommes." },
        { num:4, q:"In welche Klasse geht Frau Hegers Sohn?", opts:["In die neunte Klasse","In die dritte Klasse","In die vierte Klasse"], ans:1,
          transcript:"Kollege: Haben Sie Kinder, Frau Heger?\nKollegin: Ja, einen Sohn.\nKollege: Und wie alt ist er?\nKollegin: Neun Jahre... seit gestern.\nKollege: Ah, dann geht er ja schon zur Schule?\nKollegin: Ja klar, schon in die dritte Klasse." },
        { num:5, q:"Wie kommt die Frau in den 2. Stock?", opts:["Mit dem Aufzug","Auf der Treppe um die Ecke","Mit der Rolltreppe"], ans:0,
          transcript:"Kundin: Ach, entschuldigen Sie, wie komme ich denn hier in den zweiten Stock? Die Rolltreppe da vorn ist kaputt.\nVerkäufer: Da gehen Sie hier rechts um die Ecke und nehmen den Aufzug.\nKundin: Um die Ecke rechts. Danke." },
        { num:6, q:"Wohin fährt Herr Albers?", opts:["In Urlaub ans Meer","Zur Arbeit","Zur Familie"], ans:2,
          transcript:"Kollegin: Guten Morgen, Herr Albers. So früh schon bei der Arbeit?\nKollege: Ja, ich habe noch viel zu tun. Morgen fahre ich doch für 3 Wochen weg.\nKollegin: Ach ja, das hab' ich vergessen. Wohin fahren Sie denn?\nKollege: Zu meinen Verwandten nach Polen.\nKollegin: Na dann... schöne Zeit." },
      ]
    },
    teil2: {
      instructions: "Kreuzen Sie an: Richtig oder Falsch. Sie hören jeden Text einmal.",
      type: "richtigfalsch",
      questions: [
        { num:7, q:"Die Kunden sollen die Weihnachtsfeier besuchen.", ans:false,
          transcript:"Liebe Kunden, zu Weihnachten bieten wir Ihnen Superpreise an… z. B. erstklassiger italienischer Weißwein für 12 Euro 78 die Flasche oder exklusiver argentinischer Rotwein für 9 Euro 68. Besuchen Sie uns im 3. Stock. Frohe Weihnachten." },
        { num:8, q:"Die Fahrgäste sollen sich im Restaurant treffen.", ans:false,
          transcript:"Liebe Fahrgäste. Wir sind kurz vor Würzburg. Sicherlich haben Sie schon Hunger. An der nächsten Raststätte halten wir für eine Stunde. Wir treffen uns wieder um halb eins am Bus, aber bitte pünktlich sein." },
        { num:9, q:"Die Fahrgäste sollen im Zug bleiben.", ans:true,
          transcript:"Liebe Fahrgäste! Bitte beachten Sie. Das ist ein außerplanmäßiger Halt. Bitte hier nicht aussteigen. In ein paar Minuten erreichen wir den Bahnhof Bonn – Bad Godesberg." },
        { num:10, q:"Der Herr soll sofort zum Schalter kommen.", ans:true,
          transcript:"Herr Stefan Janda gebucht auf dem Flug LH 737 nach Warschau, wird zum Schalter F7 gebeten. Der Flug wird in ein paar Minuten geschlossen. Herr Janda gebucht nach Warschau bitte nach F7." },
      ]
    },
    teil3: {
      instructions: "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      type: "abc",
      questions: [
        { num:11, q:"Die Nummer ist:", opts:["11833","11883","12833"], ans:0,
          transcript:"Telefonansagedienst der deutschen Telekom. Die Rufnummer des Teilnehmers hat sich geändert. Bitte rufen Sie die Telefon-Auskunft an unter 11 8 33." },
        { num:12, q:"Wo genau treffen sich die Männer?", opts:["Am Zug","Am Bahnhof","An der Information"], ans:2,
          transcript:"Hallo Jan, hier ist Boris. Du, ich bin noch im Zug. Du holst mich doch vom Bahnhof ab? Ich warte an der Information auf dich." },
        { num:13, q:"Wie lange will der Mann noch warten?", opts:["20 Minuten","2 Minuten","10 Minuten"], ans:2,
          transcript:"Mensch Jan, du Penner, hier noch mal Boris. Ich bin jetzt am Bahnhof. Und du? Wo bist du denn? Ich warte schon über 20 Minuten auf dich. Zehn Minuten Zeit hast du noch... bis 2, dann nehme ich ein Taxi." },
        { num:14, q:"An welchem Tag will die Frau kommen?", opts:["Am Montag","Am Sonntag","Am Samstag"], ans:1,
          transcript:"Guten Tag, hier Rogalla. Wir können am Samstag leider nicht zu Ihnen kommen. Am Sonntag haben wir aber Zeit. Rufen Sie uns doch bitte zurück, ob Ihnen das passt. Danke." },
        { num:15, q:"Was ist kaputt?", opts:["Der Fernseher","Der Computer","Das Handy"], ans:1,
          transcript:"Hallo Alex. Walter hier. Kannst du schnell mal rüber kommen? Mein Computer hat einen Fehler. Ich kann nichts drucken. Melde dich doch bitte gleich, wenn du nach Hause kommst." },
      ]
    },
  },

  // ═══════════════════════════════════════════
  // LESEN — circa 25 Minuten, 15 Punkte
  // ═══════════════════════════════════════════
  lesen: {
    title: "Lesen", time: 25, points: 15,
    instructions: "Dieser Test hat drei Teile. Sie lesen kurze Briefe, Anzeigen etc. Zu jedem Text gibt es Aufgaben. Kreuzen Sie die richtige Lösung an.",
    teil1: {
      instructions: "Lesen Sie die beiden Texte und die Aufgaben 1 bis 5. Kreuzen Sie an: Richtig oder Falsch.",
      type: "richtigfalsch",
      texts: [
        { label:"E-Mail von Karin", text:"Hallo Li,\n\ndanke für deine Mail. Dein Zug kommt hier in Hannover um 12.36 Uhr an. Ich bin ab 12.15 Uhr im Hauptbahnhof und warte auf dich vor der Auskunft.\nDu kannst mich den ganzen Vormittag auf meinem Handy (++49 173 62 205 59) erreichen.\n\nDeine\nKarin" },
        { label:"Brief von Ralf", text:"Liebe Carmen,\n\nam kommenden Sonntag habe ich Geburtstag. Ich möchte gerne mit dir feiern und lade dich herzlich zu meiner Party am Samstagabend ein. Wir fangen um 21 Uhr an. Ist das okay für dich?\nEs werden viele Leute da sein, die du auch kennst. Kannst du vielleicht einen Salat mitbringen? Und vergiss bitte nicht einen Pullover oder eine Jacke! Wir wollen nämlich draußen im Garten feiern.\n\nIch freue mich sehr auf dich!\nBis zum Wochenende\nRalf" },
      ],
      questions: [
        { num:1, q:"Lis Zug kommt nach halb eins an.", ans:false, textIdx:0, hint:"12.36 Uhr = nach halb eins? Nein, halb eins = 12:30, also 12:36 ist NACH halb eins → Richtig!" },
        { num:2, q:"Karin wartet den ganzen Vormittag vor der Auskunft.", ans:false, textIdx:0, hint:"Sie ist ab 12.15 dort, aber den ganzen Vormittag erreichbar auf dem Handy — nicht vor der Auskunft." },
        { num:3, q:"Ralf hatte am letzten Wochenende Geburtstag.", ans:false, textIdx:1, hint:"'Am kommenden Sonntag' = nächsten Sonntag, nicht letztes Wochenende." },
        { num:4, q:"Ralf hat nur zwei oder drei Leute eingeladen.", ans:false, textIdx:1, hint:"'Viele Leute' — nicht nur zwei oder drei." },
        { num:5, q:"Die Party findet draußen statt.", ans:true, textIdx:1, hint:"'Wir wollen draußen im Garten feiern.'" },
      ]
    },
    teil2: {
      instructions: "Lesen Sie die Texte und die Aufgaben 6 bis 10. Wo finden Sie Informationen? Kreuzen Sie an: a oder b.",
      type: "ab",
      questions: [
        { num:6, q:"Sie möchten mit dem Schiff auf dem Rhein fahren.",
          optA:{label:"www.schiff-ruedesheim.de", desc:'Hotel – Pension Schiff: Einzel- und Doppelzimmer mit Dusche/WC, Restaurant mit Rhein-Terrasse'},
          optB:{label:"www.bingen-ruedesheimer.de", desc:"Bingen-Rüdesheimer Rheinschiffe: täglich von Rüdesheim nach Koblenz, alle Abfahrtszeiten und Preise"},
          ans:"b" },
        { num:7, q:"Sie möchten Deutsch in Deutschland lernen.",
          optA:{label:"www.sprachenfuchs.de", desc:"Sprachinstitut Fuchs, Dresden: Deutsch · Englisch · Französisch · Russisch"},
          optB:{label:"www.eviva.com", desc:"Eviva-Idiomas: Sprachkurse für Deutsche — Spanisch auf Mallorca, Englisch auf Malta"},
          ans:"a" },
        { num:8, q:"Sie möchten ein Zugticket im Internet kaufen.",
          optA:{label:"www.DER.com", desc:"Deutsches Reisebüro: Ticketbestellungen und Reservierungen für Flüge weltweit, Deutsche Bahn, Eurobus, 24-Stunden-Service"},
          optB:{label:"www.RED.com", desc:"Reisedienst GmbH: Ticketservice für Theater, Konzerte, Busreisen in Deutschland und nach Polen, Tschechien und Ungarn"},
          ans:"a" },
        { num:9, q:"Sie möchten Informationen über den Bodensee.",
          optA:{label:"www.bodensee.de", desc:"Touristeninformation Bodensee: Urlaubsorte, Ferienwohnungen, Hotelservice, Rundreisen"},
          optB:{label:"www.rottenmeier.de", desc:"Hans Rottenmeier: Ferienwohnungen am Bodensee — Häuser, Preise, Kontakt"},
          ans:"a" },
        { num:10, q:"Sie sind in Wiesbaden und möchten mit dem Zug am Mittag in Hamburg sein.",
          optA:{label:"Zug a", desc:"ab Hamburg 12.18 → an Wiesbaden 16.52 (4:34, 1× umsteigen)"},
          optB:{label:"Zug b", desc:"ab Wiesbaden 08.09 → an Hamburg 12.40 (4:31, 1× umsteigen)"},
          ans:"b" },
      ]
    },
    teil3: {
      instructions: "Lesen Sie die Texte und die Aufgaben 11 bis 15. Kreuzen Sie an: Richtig oder Falsch.",
      type: "richtigfalsch",
      questions: [
        { num:11, q:"In der Sprachschule können Sie etwas zu essen kaufen.", ans:true,
          context:"In der Sprachschule", sign:"In der 10-Uhr-Pause bekommen Sie an der Rezeption ein Frühstückspaket: Belegte Brötchen und Getränke für 2 Euro." },
        { num:12, q:"Es ist Samstagnachmittag. Sie können auf der Post Briefmarken kaufen.", ans:false,
          context:"An der Post", sign:"Öffnungszeiten: montags – freitags 8.00 – 12.00 und 13.00 – 18.00, samstags 8.00 – 12.00" },
        { num:13, q:"Sie können hier Zigaretten rauchen.", ans:false,
          context:"Am Bahnhof", sign:"Auf dem gesamten Bahnhof ist das Rauchen verboten." },
        { num:14, q:"Heute Abend können Sie in diesem Restaurant tanzen.", ans:true,
          context:"Eingang Restaurant", sign:"Heute im Bavaria: Bayerischer Abend — Brezeln, Weißwürste, Sauerkraut, Volksmusik, ab 20 Uhr Tanz" },
        { num:15, q:"Von 23 Uhr bis 1 Uhr fährt kein Bus.", ans:true,
          context:"An der Haltestelle", sign:"In der Neujahrsnacht: Busverkehr bis 23.00 Uhr und von 1.00 Uhr bis 5.00 Uhr alle 30 Minuten" },
      ]
    },
  },

  // ═══════════════════════════════════════════
  // SCHREIBEN — circa 20 Minuten, 15 Punkte
  // ═══════════════════════════════════════════
  schreiben: {
    title: "Schreiben", time: 20, points: 15,
    teil1: {
      instructions: "Ihre Freundin, Eva Kadavy, macht mit ihrem Mann und ihren beiden Söhnen (8 und 11 Jahre alt) Urlaub in Seeheim. Im Reisebüro bucht sie für den nächsten Sonntag eine Busfahrt um den Bodensee. Frau Kadavy hat keine Kreditkarte. In dem Formular fehlen fünf Informationen. Helfen Sie Ihrer Freundin und schreiben Sie die fünf fehlenden Informationen in das Formular.",
      type: "form",
      title: "Bodensee-Rundfahrt Anmeldung",
      given: { "Familienname, Vorname": "Kadavy, Eva", "Urlaubsadresse": "Hotel Schönblick", "Straße, Hausnummer": "Burgstraße 34", "PLZ (Teil)": "78014" },
      fields: [
        { num:1, label:"Anzahl der Personen", answer:"4", hint:"Mann + Eva + 2 Söhne = 4" },
        { num:2, label:"Davon Kinder", answer:"2", hint:"Zwei Söhne (8 und 11)" },
        { num:3, label:"PLZ, Urlaubsort (Ort fehlt)", answer:"Seeheim", hint:"Sie macht Urlaub in Seeheim" },
        { num:4, label:"Zahlungsweise", answer:"bar", hint:"Sie hat keine Kreditkarte → bar" },
        { num:5, label:"Reisetermin", answer:"Sonntag", hint:"Für den nächsten Sonntag" },
      ]
    },
    teil2: {
      instructions: "Sie möchten im August Dresden besuchen. Schreiben Sie an die Touristeninformation.",
      type: "freetext",
      prompts: [
        "Warum schreiben Sie?",
        "Bitten Sie: Informationen über Filme, Museen usw. (Kulturprogramm).",
        "Fragen Sie: Hoteladressen?",
      ],
      hint: "Schreiben Sie zu jedem Punkt ein bis zwei Sätze auf den Antwortbogen (circa 30 Wörter). Schreiben Sie auch eine Anrede und einen Gruß.",
      sampleAnswer: "Sehr geehrte Damen und Herren,\n\nich möchte im August Dresden besuchen. Können Sie mir bitte Informationen über das Kulturprogramm schicken? Ich interessiere mich für Museen und Filme.\nHaben Sie auch Hoteladressen für mich?\n\nVielen Dank!\nMerrill Ejike",
      scoring: "3 Punkte pro Inhaltspunkt (voll erfüllt) / 1,5 (teilweise) / 0 (nicht erfüllt). 1 Punkt für angemessene Anrede+Gruß. Max 10 Punkte.",
    }
  },

  // ═══════════════════════════════════════════
  // SPRECHEN — circa 15 Minuten
  // ═══════════════════════════════════════════
  sprechen: {
    title: "Sprechen", time: 15,
    instructions: "Dieser Test hat drei Teile. Sprechen Sie bitte in der Gruppe.",
    teil1: {
      title: "Sich vorstellen",
      instructions: "Stellen Sie sich vor. Sagen Sie etwas zu den folgenden Punkten:",
      prompts: ["Name?","Alter?","Land?","Wohnort?","Sprachen?","Beruf?","Hobby?"],
      tip: "Der Prüfer bittet Sie auch, etwas zu buchstabieren (z.B. Ihren Namen) und eine Nummer zu nennen (z.B. Telefonnummer).",
      sampleAnswers: [
        "Mein Name ist Merrill Ejike.",
        "Ich bin 28 Jahre alt.",
        "Ich komme aus Nigeria.",
        "Ich wohne in Hamburg.",
        "Ich spreche Englisch und lerne Deutsch.",
        "Ich bin Data Analyst.",
        "Mein Hobby ist Programmieren.",
      ]
    },
    teil2: {
      title: "Um Informationen bitten und geben",
      instructions: "Sie ziehen eine Karte und stellen eine Frage zum Thema. Ihr Partner antwortet. Dann ist er/sie dran.",
      themes: [
        { name:"Essen & Trinken", cards:["Frühstück","Lieblingsessen","Sonntag","Bier","Fleisch","Brot"] },
        { name:"Einkaufen", cards:["Zeitung","Kasse","Obst","Schuhe","Buch","Stadtplan"] },
      ],
      tip: "Beispiel: Karte 'Frühstück' → 'Was essen Sie zum Frühstück?' / 'Zum Frühstück esse ich Brot mit Käse.'",
    },
    teil3: {
      title: "Bitten formulieren und darauf reagieren",
      instructions: "Sie ziehen eine Karte mit einem Bild und formulieren eine Bitte.",
      items: ["Stift/Kugelschreiber","Buch/Heft","Jacke/Mantel","Stift/Bleistift","Stuhl","Uhr/Wecker","Apfel","Besteck (Messer+Gabel)","Glas/Becher","Nicht rauchen!","Koffer/Tasche","Radio/Musik"],
      tip: "Beispiel: Bild von einem Glas Wasser → 'Ein Glas Wasser, bitte!' / 'Können Sie mir bitte ein Glas Wasser geben?'",
    }
  },

  // Answer key extracted from Lösungen page
  answerKey: {
    hoeren: {
      teil1: { 1:"c", 2:"b", 3:"a", 4:"b", 5:"a", 6:"c" },
      teil2: { 7:"falsch", 8:"falsch", 9:"richtig", 10:"richtig" },
      teil3: { 11:"a", 12:"c", 13:"c", 14:"b", 15:"b" },
    },
    lesen: {
      teil1: { 1:"richtig", 2:"falsch", 3:"falsch", 4:"falsch", 5:"richtig" },
      teil2: { 6:"b", 7:"a", 8:"a", 9:"a", 10:"b" },
      teil3: { 11:"richtig", 12:"falsch", 13:"falsch", 14:"richtig", 15:"richtig" },
    },
    schreiben: {
      teil1: { 1:"4", 2:"2", 3:"Seeheim", 4:"bar", 5:"Sonntag/nächsten Sonntag" },
    }
  }
};
