class Record {
    constructor(year, month, unit, name) {
        this._year = year;
        this._month = month;
        this._unit = unit;
        this._name = name;
    }

    static _units = [
        [118, "Turistika", "T", "green"],
        [119, "Fitness", "F", "red"],
        [120, "Wedze/Voda", "WV", "blue"],
        [121, "Běh", "B", "purple"],
        [122, "Cyklo", "C", "grey"],
        [123, "Oxelo/Rakety", "OR", "yellow"],
        [124, "Příroda", "P", "brown"],
        [125, "Welcome Desk", "WD", "pink"],
        [171, "Servis", "S", "black"],
        [274, "Kolektivky", "K", "orange"]
    ]

    get year() {
        return this._year;
    }

    get month() {
        return this._month;
    }

    get unit() {
        return this._unit;
    }

    get name() {
        return this._name;
    }

    unitName() {
        return Record._units.find(element => element[0] === this._unit)[1];
    }

    static unitNumSearch(num) {
        for(var u of this._units) {
            if(u[0] === num) return u;
        }
        console.log("Pozor, oddeleni" + num + "neexistuje!");
        return this._units[0];
    }


}