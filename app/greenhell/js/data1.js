var data1 = {
  akt: 1,
  initcards: [
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jane: 'Ob ich ihm von meiner Suche erzählen kann?'",
      hor: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jane: 'Was für eine schöne Pflanze.' Jack: 'Vorsicht, die ist giftig.'",
      ver: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jane: 'Jack hat ein düsteres Geheimnis, das spüre ich.'",
      ver: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jack: 'Was suchen wir hier eigentlich?'",
      ver: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jack: 'Ich brauche einen Whisky.'",
      ver: true,
      hor: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jane: 'Puuh, diese Luft bringt mich um.'",
      ver: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jack: 'Wer hat wohl meinen Bezintank manipuliert?'",
      hor: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jack: 'Hier können wir rasten.'",
      hor: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jane: 'Hier waren wir doch schon mal.'",
      hor: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jane: Prof. Hampton ist ein berühmter Archeologe.",
      hor: true
    },
    {
      name: "Weg",
      Aktion: "",
      flavour: "Jane: 'Ist das der richtige Weg?'",
      hor: true,
      ver: true
    },
    {
      name: "Tempel",
      Aktion: "Ihr findet eine alte Tempelruine mit unbekannten Schriftzeichen.",
      hor: false,
      ver: true
    },
    {
      name: "Statue",
      Aktion: "Ihr findet eine alte Statue mit unbekannten Schriftzeichen.",
      hor: false,
      ver: true
    },
    {
      name: "Machete",
      Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",
      ver: true,
      imgclass: "symbol"
    },
    {
      name: "Machete",
      Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",
      hor: true,
      ver: true,
      imgclass: "symbol"
    },
    {
      name: "Machete",
      Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",
      hor: true,
      imgclass: "symbol"
    },
    {
      name: "Machete",
      Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",
      ver: true,
      imgclass: "symbol"
    },
    {
      name: "Machete",
      Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",
      hor: true,
      imgclass: "symbol"
    },
    {
      name: "Liane",
      Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",
      hor: true,
      imgclass: "symbol"
    },
    {
      name: "Liane",
      Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",
      ver: true,
      imgclass: "symbol"
    },
    {
      name: "Hängebrücke",
      info: "problem",
      Aktion: "Über eine tiefe Schlucht spannt sich eine Hängebrücke. Du kannst den Ort mit vollem Inventar nicht überqueren. Lege dann zuerst einen Gegenstand zurück."
    },
    {
      name: "Hängebrücke",
      info: "problem",
      Aktion: "Über eine tiefe Schlucht spannt sich eine Hängebrücke. Du kannst den Ort mit vollem Inventar nicht überqueren. Lege dann zuerst einen Gegenstand zurück."
    },
    {
      name: "Hängebrücke",
      info: "problem",
      Aktion: "Über eine tiefe Schlucht spannt sich eine Hängebrücke. Du kannst den Ort mit vollem Inventar nicht überqueren. Lege dann zuerst einen Gegenstand zurück."
    },
    {
      name: "Hängebrücke",
      info: "problem",
      Aktion: "Über eine tiefe Schlucht spannt sich eine Hängebrücke. Du kannst den Ort mit vollem Inventar nicht überqueren. Lege dann zuerst einen Gegenstand zurück."
    },
    {
      name: "Hängebrücke",
      info: "problem",
      Aktion: "Über eine tiefe Schlucht spannt sich eine Hängebrücke. Du kannst den Ort mit vollem Inventar nicht überqueren. Lege dann zuerst einen Gegenstand zurück."
    },
    {
      name: "Boot",
      Aktion: "Mit dem Boot kannst du dem See überqueren oder auf dem Fluß fahren.",
      hor: true,
      imgclass: "symbol"
    },
    {
      name: "Fackel",
      Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.",
      ver: true,
      imgclass: "symbol"
    },
    {
      name: "Pistole",
      Aktion: "Die Pistole ist alt und hat nur noch eine Kugel.",
      hor: true,
      imgclass: "symbol"
    },
    {
      name: "See",
      Aktion: "Nur mit dem Boot kannst du den See betreten oder überqueren.",
      info: "problem"
    },
    {
      name: "See",
      Aktion: "Nur mit dem Boot kannst du den See betreten oder überqueren.",
      info: "problem"
    },
    {
      name: "Tagebuch",
      Aktion: "Ihr findet das Tagebuch von Professor Hampton. Er sucht das geheime 'Tal der Kannibalen'. Finde den Tempel, die Staue und die versteckte Inschrift, um den Weg dorhin zu entschlüsseln.",
      imgclass: "symbol"
    },
    {
      name: "Gegengift",
      Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange. ",
      hor: true,
      imgclass: "symbol"
    },
    {
      name: "Gegengift",
      Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",
      hor: true,
      imgclass: "symbol"
    },
    {
      name: "Gegengift",
      Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",
      hor: true,
      imgclass: "symbol"
    },
    {
      name: "Affenhorde",
      Aktion: " Mit der Pistole kannst du Affenhorde verjagen. Lege die Pistole hier ab. Ansonsten klauen die Affen euch einen Gegenstand. Lege einen Gegenstand aus dem Inventar in den Vorrat.",
      ver: true,
      info: "problem"
    },
    {
      name: "Affenhorde",
      Aktion: " Mit der Pistole kannst du Affenhorde verjagen. Lege die Pistole hier ab. Ansonsten klauen die Affen euch einen Gegenstand. Lege einen Gegenstand aus dem Inventar in den Vorrat.",
      ver: true,
      info: "problem"
    },
    {
      name: "Affenhorde",
      Aktion: " Mit der Pistole kannst du Affenhorde verjagen. Lege die Pistole hier ab. Ansonsten klauen die Affen euch einen Gegenstand. Lege einen Gegenstand aus dem Inventar in den Vorrat.",
      hor: true,
      info: "problem"
    },
    {
      name: "Affenhorde",
      Aktion: " Mit der Pistole kannst du Affenhorde verjagen. Lege die Pistole hier ab. Ansonsten klauen die Affen euch einen Gegenstand. Lege einen Gegenstand aus dem Inventar in den Vorrat.",
      hor: true,
      info: "problem"
    },
    {
      name: "Schlange",
      Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.",
      info: "problem",
      hor: true
    },
    {
      name: "Schlange",
      Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.",
      info: "problem",
      ver: true
    },
    {
      name: "Schlange",
      Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.",
      info: "problem",
      ver: true
    },
    {
      name: "Schlange",
      Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.",
      info: "problem",
      hor: true
    },
    {
      name: "Tiger",
      info: "event",
      Aktion: "Ein Tiger zieht langsam an euch vorbei. Der aktive Spieler darf sich für 20sec nicht bewegen und nicht sprechen. sonst frisst der Tiger Jack und Jane und ihr habt die Partie verloren. Starte jetzt."
    },
    {
      name: "Sturm",
      info: "event",
      Aktion: "Ein Sturm zieht durch den Dschungel. Er entfernt 2 Macheten (deiner Wahl) vom Spielplan in den Vorrat."
    },
    // {
    //   name: "Karte",
    //   info: "event",
    //   Aktion: "Du findest eine Karte des Dschungels. Ab sofort kannst du Karten auch diagonal anlegen."
    // },
    {
      name: "Explosion",
      info: "event",
      Aktion: "Du hörst eine riesige Explosion. Das Flugzeug ist explodiert. Nehmt die Startkarte in der Spielmitte aus dem Spiel. Wenn du auf dem Startfeld steht, bist du tot."
    },
    // {
    //   name: "Lager",
    //   info: "event",
    //   Aktion: "Du findest ein verlassenes Lager. Du kannst bis zu 2 Dinge aus dem Vorrat auf passende leere Karten legen. (z.B.: Liane auf Lianenkarte)"
    // },
    {
      name: "Tierfalle",
      info: "event",
      Aktion: "Jacks Bein verletzt sich in einer Tierfalle des Jägers Stoephasius. Du kannst pro Zug nur noch 3 Felder weit ziehen bis du das Startfeld erreicht hast und das Bein verbinden konntest."
    },
    {
      name: "Rucksack",
      Aktion: "Du findest einen alten Rucksack. Nimm die Inventarkarte Rucksack hinzu.",
      ver: true,
      imgclass: "symbol"
    },
  ],
  initEvents: [],
  initActions: [
    {
      name: "Inschrift",
      order: "announcement",
      Aktion: "Eine Steininschrift ist hinter Dschungelpflanzen verborgen. Lege eine Machete hier ab, um die Inschrift freizulegen. Wenn ihr zusätzlich den Tempel und die Statue gefunden habt und mit dem Tagebuch könnt ihr den Text übersetzen. Er verrät euch die Position des 'Tal der Kannibalen'",
      task: true
    },
    {
      name: "Traum",
      order: "announcement",
      Aktion: "Jane hat einen mysteriösen Traum. Im Tempel findet Sie mit der Fackel und dem Tagebuch den Weg zum Tal der Kanibalen. Legt die Fackel und das Tagebuch im Tempel ab, dann kennt ihr den Weg zum 'Tal der Kannibalen'.",
      task: true
    },
    {
      name: "Treibsand",
      order: "star",
      Aktion: "Jack bleibt im Treibsand stecken. Jane muss eine Liane hierherbringen, um ihn zu retten. Gib die Liane dazu ab. Bis dahin kannst du Jacks Inventarkarte nicht verwenden.",
      task: true
    },
    {
      name: "Whiskykiste",
      order: "star",
      Aktion: "Jack hat Alkoholprobleme, weil seine Frau vor 3 Jahren erschossen wurde. Falls du in den letzten 24 Stunden keinen Alkohol getrunken hast, kann sich auch Jack beherrschen. Ansonsten säuft er sich voll und du verlierst einen Gegenstand.",
      task: true
    },
    {
      name: "Alligator",
      order: "star",
      Aktion: "Jane wird von einem Alligator angegriffen. Jack kann sie mit der Pistole retten.Ansonsten wird Sie im letzten Moment vom Jäger Stoephasius gerettet. Er will sich euch anschliessen, aber Jane weist ihn wütend zurück. Stoephasius verlässt euch mit den Worten: 'Das wird euch noch leid tun.' Akt 2 mit 'Jäger'",
      task: true
    },
    {
      name: "_________",
      order: "star",
      Aktion: "",
      task: true
    },
    {
      name: "Fluss",
      order: "home",
      orderText: "Ausgang",
      Aktion: "Wenn ihr den Weg zum 'Tal der Kannibalen' kennt, könnt ihr mit dem Boot über den Fluss dorthin fahren und den Akt 1 erfolgreich beenden. Lest dann die Karte 'Akt 1 Erfolg'",
      task: true
    }
  ],
  old: [
    {
      name: "Höhle",
      Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen. Die Fackel darf man behalten.",
      ver: true,
      info: "info"
    },
    {
      name: "Höhle",
      Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen. Die Fackel darf man behalten.",
      ver: true,
      info: "info"
    },
    {
      name: "Höhle",
      Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen. Die Fackel darf man behalten.",
      ver: true,
      info: "info"
    },
    {
      name: "Höhle",
      Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen. Die Fackel darf man behalten.",
      ver: true,
      info: "info"
    }
  ],
  start: {
    name: "Akt I",
    Aktion: "Am nächsten Morgen startet Jacks Flugzeug Richtung undurchdring-lichem Dschungel. Das Flugzeug stürzt kurz vor dem Ziel ab. Jemand hat die Benzintanks durchlöchert...",
    task: true,
    type: "Startkarte"
  },
  erfolg: {
    name: "Erfolg",
    noImage: true,
    Aktion: "Danke Jack, dass wir es geschafft haben. Ich schulde dir ein paar Erklärungen: Prof. Hampton ist mein Vater. Er sucht schon seit vielen Jahren nach dem untergegangenen Reich Atlantis. Von seiner letzten Expedition ist er nicht zurückgekehrt. Jetzt weis ich wo er ist. Wir müssen ihn finden. (Weiter mit Akt 2.)",
    task: true,
    type: "Erfolg"
  },
  misserfolg1: {
    name: "Misserfolg",
    noImage: true,
    Aktion: "Das ist das Ende. Wir sind gescheitert. Jack sieht plötzlich ein helles Licht auf sich zukommen. In einem Zeitstrudel wird er drei Tage in die Vergangeheit zurückkatapultiert. Er sitzt mit Jane in dem abgestürzten Flugzeug und beginnt das Abenteuer von vorne. Jack und Jane können sich nicht an die vorherigen Ereignisse erinnern.",
    task: true,
    type: "Misserfolg 1"
  },
  misserfolg2: {
    name: "Misserfolg",
    noImage: true,
    Aktion: "Jane: Schon wieder gescheitert. Wir müssen es noch einmal versuchen. Jack sieht ein helles Licht auf sich zukommen. In einem Zeitstrudel wird er in die Vergangeheit zurückkatapultiert. Er sitzt mit Jane in dem abgestürzten Flugzeug und beginnt das Abenteuer von vorne.",
    task: true,
    type: "Misserfolg 2"
  },
  intro: {
    name: "Intro",
    noImage: true,
    Aktion: "1927, Panama, Die junge Archäologin Jane Smith errreicht St. Josephina. Sie spricht den einzigen verfügbaren Dschungelpiloten Jack Manders an: 'Sie sind ja schon Mittags völlig betrunken. Das ist ja widerlich. Ich brauche Sie für einen Flug in den Dschungel. Ich bezahle Sie gut. Morgen früh geht es los.' Jack: 'Ok. Ok.' Das Gespräch wird von einer Person im Hintergrund belauscht.",
    task: true,
    type: "Intro"
  }
};
