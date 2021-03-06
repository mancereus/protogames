var game = {
    cards: [
        { type: "Weg", hor: false, ver: true, btype: "Heilung", bhor: true, bver: true},
        { type: "Weg", hor: true, ver: false, btype: "Schlange", bhor: true, bver: false},
        { type: "Weg", hor: false, ver: false, btype: "Seil", bhor: false, bver: true},
        { type: "Tiger", hor: true, ver: false, btype: "Schlange", bhor: false, bver: true},
        { type: "Tiger", hor: false, ver: false, btype: "Berg", bhor: false, bver: false},
        { type: "Schlange", hor: true, ver: false, btype: "Tiger", bhor: false, bver: true},
        { type: "Heilung", hor: false, ver: true, btype: "Schlange", bhor: false, bver: false},
        { type: "Berg", hor: false, ver: false, btype: "Weg", bhor: true, bver: false},
        { type: "Berg", hor: true, ver: false, btype: "Seil", bhor: false, bver: true},
        { type: "Schlange", hor: true, ver: false, btype: "Heilung", bhor: false, bver: true},
        { type: "Schlange", hor: false, ver: false, btype: "Weg", bhor: true, bver: true},
        { type: "Seil", hor: true, ver: false, btype: "Tiger", bhor: false, bver: true},
        { type: "Seil", hor: false, ver: true, btype: "Berg", bhor: true, bver: false},
        { type: "Seil", hor: true, ver: true, btype: "Heilung", bhor: true, bver: false},
        { type: "Weg", hor: true, ver: true, btype: "Berg", bhor: true, bver: false},
        { type: "Tiger", hor: false, ver: true, btype: "Seil", bhor: false, bver: true},
        { type: "Schlange", hor: false, ver: false, btype: "Tiger", bhor: true, bver: true},
        { type: "Schlange", hor: false, ver: true, btype: "Berg", bhor: true, bver: false},
    ],
    old: [
        { type: "Berg", hor: false, ver: false, btype: "Tiger", bhor: false, bver: true},
        { type: "Tiger", hor: true, ver: true, btype: "Weg", bhor: false, bver: true},
        { type: "Seil", hor: false, ver: true, btype: "Weg", bhor: false, bver: false},
        { type: "Schlange", hor: true, ver: true, btype: "Seil", bhor: true, bver: true},

    ],
    start: { type: "Start", hor: false, ver: false, btype: "Start", bhor: false, bver: false, open: true},
    end: { type: "Ziel", hor: false, ver: false,btype: "Ziel", bhor: false, bver: false, open: true}
};
