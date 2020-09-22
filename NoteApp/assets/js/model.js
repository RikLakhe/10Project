class Note {
    _time;
    _data;
    _status;

    constructor(time, data) {
        this._time = time;
        this._data = data;
        this._status = "new";
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}
