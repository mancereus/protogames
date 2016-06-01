var data1 = {
    akt: 1,
    initcards: [
        { name: "Weg", Aktion: "", flavour: "Jane: 'Ob ich ihm von meiner Suche erzählen kann?'", hor: true },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Was für eine schöne Pflanze.' Jack: 'Vorsicht, die ist giftig.'", ver: true },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Jack hat ein düsteres Geheimnis, das spüre ich.'", ver: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Was suchen wir hier eigentlich?'", ver: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Ich brauche einen Whisky.'", ver: true, hor: true },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Puuh, diese Luft bringt mich um.'", ver: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Wer hat wohl meinen Bezintank manipuliert?'", hor: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Hier können wir rasten.'", hor: true },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Hier waren wir doch schon mal.'", hor: true },
        { name: "Weg", Aktion: "", flavour: "Jane: Prof. Hampton ist ein berühmter Archeoöloge.", hor: true },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Ist das der richtige Weg?'", hor: true, ver: true },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", ver: true, imgclass: "symbol" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: true, ver: true, imgclass: "symbol" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: true, imgclass: "symbol" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: true, imgclass: "symbol" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: true, imgclass: "symbol" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: true, imgclass: "symbol" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen. Die Fackel darf man behalten.", ver: true, info: "info" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen. Die Fackel darf man behalten.", ver: true, info: "info" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen. Die Fackel darf man behalten.", ver: true, info: "info" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen. Die Fackel darf man behalten.", ver: true, info: "info" },
        { name: "Hängebrücke", info: "problem", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." },
        { name: "Hängebrücke", info: "problem", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." },
        { name: "Hängebrücke", info: "problem", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." },
        { name: "Hängebrücke", info: "problem", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." },
        { name: "Hängebrücke", info: "problem", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." },
        { name: "Boot", Aktion: "Mit dem Boot kannst du dem See überqueren oder auf dem Fluß fahren.", hor: true, imgclass: "symbol" },
        { name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.", ver: true, imgclass: "symbol" },
        { name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.", ver: true, imgclass: "symbol" },
        { name: "Pistole", Aktion: "Die Pistole ist alt und hat nur noch eine Kugel.", hor: true, imgclass: "symbol" },
        { name: "Rucksack", Aktion: "Du findest einen alten Rucksack. Nimm die Inventarkarte Rucksack hinzu.", ver: true, imgclass: "symbol" },
        { name: "Inschrift", Aktion: "Die Inschrift ist versteckt hinter Dschungelpflanzen. Lege eine Machete und das Tagebuch hier ab, dann könnt ihr den Weg zum 'Tal der Kannibalen' erkennen.", hor: true },
        { name: "See", Aktion: "Nur mit dem Boot kannst du den See betreten oder überqueren.", info: "problem" },
        { name: "Tagebuch", Aktion: "Ihr findet das Tagebuch von Professor Hampton. Er sucht das geheime 'Tal der Kannibalen'. Finde den Tempel oder die versteckte Inschrift, um den Weg dorhin zu entschlüsseln.", imgclass: "symbol" },

        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange. ", hor: true, imgclass: "symbol" },
        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", hor: true, imgclass: "symbol" },
        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", hor: true, imgclass: "symbol" },
        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", ver: true, imgclass: "symbol" },
        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", ver: true, imgclass: "symbol" },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", hor: true },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", ver: true },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", ver: true },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", ver: true },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", hor: true  },
    ],
    initActions: [
        { name: "Schrumpfkopf", Aktion: "Ihr findet einen Schrumpfkopf der Kannibalen.", imgclass: "symbol", task: true },
        { name: "Tempel", Aktion: "Ihr habt die alte Tempelruine gefunden. Lege das Tagebuch hier ab, dann kennt ihr den Weg zum 'Tal der Kannibalen'.", task: true },
        { name: "Lager", Aktion: "Du findest ein verlassenes Lager. Du kannst bis zu 2 Dinge aus dem Vorrat auf passende leere Karten legen. (z.B.: Liane auf Lianenkarte)", task: true },

        { name: "Tierfalle", Aktion: "Jacks Bein verletzt sich in einer Tierfalle des Großwildjägers. Du kannst bis zu einem anderen Eckfeld pro Zug nur 3 Felder weit ziehen. Verwende in Akt 2 eine Aktionskarte mit 'Jäger'", task: true },
        { name: "Überfall", order: "star", Aktion: "Jack kommt ins Lager zurück und Jane ist verschwunden. Er findet Spuren eines Kampfes und Pfeile der Kannibalen. Lege Janes Inventarkarte zur Seite.Verwende in Akt 2 eine Aktionskarte mit 'Jane'", task: true },
        { name: "Whiskykiste", order: "star", Aktion: "Jack findet eine Whiskykiste. Er hat Alkoholprobleme, weil seine Frau vor 3 Jahren in einem Hinterhalt erschossen wurde. Falls du in den letzten 24 Stunden keinen Alkohol getrunken hast, kann sich auch Jack beherrschen. Verwende dann'Jack' in Akt 2. Ansonsten säuft er sich voll und du verlierst einen Gegenstand.", task: true },
        { name: "Menschenaffe", order: "star", Aktion: "Jane wird von einem Riesenaffen angegriffen aber im letzten Moment vom Jäger Stoephasius gerettet. Er will sich euch anschliessen, aber Jack weist ihn wütend zurück. Stoephasius verlässt euch mit den Worten: 'Das wird euch noch leid tun.' Akt 2 mit 'Jäger'", task: true },
        { name: "Karte", Aktion: "Du findest eine Karte des Dschungels. Ab sofort kannst du Karten auch diagonal anlegen.", task: true },
        { name: "Fluss", order: "home", Aktion: "Wenn ihr den Weg zum 'Tal der Kannibalen' kennt, könnt ihr mit dem Boot über den Fluss dorthin fahren und den Akt 1 beenden.", task: true },
        { name: "Minenfahrt", order: "home", Aktion: "Wenn ihr den Weg zum 'Tal der Kannibalen' kennt, alle 4 Höhlen im Spielplan gefunden sind und ihr eine Fackel besitzt, könnt ihr mit einer Lore in das 'Tal der Kannibalen' fahren. Dabei musst du die Fackel abgeben. Verwende in Akt 2 eine Aktionskarte mit 'Mine'", task: true },
        { name: "Sturm", Aktion: "Ein Sturm zieht durch den Dschungel. Alle verwendeten Macheten kommen auf Machetenfelder zurück.", task: true },

    ],
    start: { name: "Akt I", Aktion: "Jane hat den Piloten Jack für eine geheime Expedition in den Dschungel engagiert.  Das Flugzeug stürzt kurz vor dem Ziel ab. Jemand hat die Tanks durchlöchert...", task: true, type: "Startkarte" },
}