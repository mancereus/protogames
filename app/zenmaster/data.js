var data = {
    dict: [
        {solution: "Kugelschreiber", form:"stabförmig", inhalt:"mehrere Teile", ort:"jetzt mehr als früher", extra:"leicht"},
        {solution: "Sonne", form:"kugelförmig", inhalt:"heiss", ort:"schon beiden römern", extra:"grösser als ein rehienhaus"},
        {solution: "Lagerfeuer", form:"", inhalt:"", ort:"", extra:""},
        {solution: "Kugel Vanille-Eis", form:"", inhalt:"", ort:"", extra:""},
        {solution: "Skateboard", form:"", inhalt:"", ort:"", extra:""},
        {solution: "Stinktier", form:"mit Haaren", inhalt:"stinkt", ort:"in freier Wildbahn", extra:"Katze"},
        {solution: "Puzzle", form:"mehrere Teile", inhalt:"papier", ort:"", extra:""},
        {solution: "Kartenspiel", form:"Rechteckig", inhalt:"papier", ort:"Gaststätte", extra:"weniger als 100g"},
        {solution: "Plastiktier", form:"4 Beine", inhalt:"hart", ort:"zoo", extra:"weniger als 1kg"},
        ],
    form: {
        type: "Form",
        type2: "Oberfläche",
        desc: "Wie ist die Gestalt des Dings? Ist es eher rund oder eckig? Flach oder stabförmig? Ist seine Oberfläche glatt oder rauh? Hart oder elastisch? Fühlt es sich warm an? Hat es Haare? Steht es auf 4 Beinen? Besteht es aus mehreren Teilen?",
        cards: [
            { name: "ist lang und dünn oder stabförmig" },
            { name: "ist im wesentlichen flach" },
            { name: "ist kugel- oder eiförmig" },
            { name: "ist Kistenförmig oder rechteckig" },
            { name: "steht auf 4 Beinen" },
            { name: "besteht aus mehreren Teilen, die sich trennen lassen" },
            { name: "Oberfläche ist warm oder heiss" },
            { name: "Oberfläche teilweise mit Haaren oder Pelz" },
            { name: "Oberfläche ist vorwiegend glatt" },
            { name: "Oberfläche ist vorwiegend rauh" },
            { name: "Oberfläche ist vorwiegend hart" },
            { name: "Oberfläche ist vorwiegend elastisch" },
        ]
    },
    inhalt: {
        type: "Inhalt",
        type2: "Bestandteil",
        desc: "Welche Bestandteile hat das Ding? Hat es Zähne, Räder oder Gelenke? Bewegt es sich selbständig oder schwimmt es? Hat es Symbole oder leuchtet es? Macht es Geräusche oder braucht es Elektrizität? Schmeckt es gut oder riecht es? Ist es teuer oder gibt es viele davon? Enthält es Papier oder sind Symbole darauf? Kann es leicht kaputt gehen?",
        cards: [
            { name: "enthält Papier oder Karton" },
            { name: "hat Zähne oder spitze Teile" },
            { name: "mit Rad oder vollständig drehbarem Teil" },
            { name: "mit Gelenk oder beweglichem Teil" },
            { name: "darauf sind Buchstaben, Zeichen oder Zahlen" },
            { name: "macht Geräusche, selbständig oder bei normalen Gebrauch" },
            { name: "glänzt, strahlt oder leuchtet" },
            { name: "tritt meist in größeren Mengen auf" },
            { name: "geht kaputt, wenn man sich darauf setzt" },
            { name: "riecht eher schlecht, stinkt" },
            { name: "schmeckt gut" },
            { name: "kostet mehr als 100 Euro" },
            { name: "kann ohne Elektrizität kaum verwendet werden" },
            { name: "bewegt sich selbständig" },
            { name: "bewegt sich selbständig, aber eher langsam" },
            { name: "schwimmt im Wasser oben" },
        ]
    },
    ort: {
        type: "Ort",
        type2: "Zeit",
        desc: "Zu welcher Zeit gibt es das Ding häufiger? Im Winter oder Sommer? Früher oder Jetzt? An welchen Orten gibt es das Ding häufiger? Stadt oder Wald? In der Nähe oder weiter weg? Im Freibad oder Zoo? Im Büro oder zu Hause? Im Cafe?",
        cards: [
            { name: "kann ich innerhalb von 5 Minuten hierherbringen" },
            { name: "ist nicht im Umkreis von 100 Metern zu finden" },
            { name: "gibt es eher im Wald als in der Stadt" },
            { name: "gibt es eher in freier Wildbahn" },
            { name: "gibt es im Zoo" },
            { name: "gibt es im Büro" },
            { name: "gibt es in der Gaststätte oder Cafe" },
            { name: "gibt es zu Hause" },
            { name: "gibt es Freibad" },
            { name: "gibt es häufiger in der Stadt als auf dem Land" },
            { name: "wird eher im Winter als im Sommer verwendet" },
            { name: "wird eher im Sommer als im Winter verwendet" },
            { name: "gab es schon bei den alten Griechen oder Römern" },
            { name: "es gibt jetzt mehr als vor 100 Jahren" },
        ]
    },
    extra: {
        type: "Größe",
        type2: "Gewicht",
        desc: "Wie hoch oder lang ist es? Klein, Mittel, groß oder sehr groß? Wie schwer ist es? Leicht, mittel oder schwer? Passt es in eine grosse oder kleine Kiste?",
        cards: [
            { name: "weniger als 1cm hoch" },
            { name: "zwischen 1cm und 10cm hoch" },
            { name: "zwischen 10cm und 1m hoch" },
            { name: "zwischen 1m und 10m hoch" },
            { name: "mehr als 10m hoch" },
            { name: "weniger als 1m lang <-->" },
            { name: "zwischen 1m und 5m lang <-->" },
            { name: "mehr als 5 m lang <-->" },
            { name: "passt in eine quadratische Kiste mit 1 Meter Seitenlänge" },
            { name: "passt in einen Schuhkarton" },
            { name: "leichter als 100gr" },
            { name: "ist zwischen 100gr und 1kg schwer" },
            { name: "ist zwischen 1kg und 10kg schwer" },
            { name: "ist zwischen 10kg und 100kg schwer" },
            { name: "schwerer als 100kg" },
        ]
    }
}
