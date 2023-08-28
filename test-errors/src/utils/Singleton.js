"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    closure_;
    value_;
    constructor(closure) {
        this.closure_ = closure;
        this.value_ = NOT_MOUNTED_YET;
    }
    get(...args) {
        if (this.value_ === NOT_MOUNTED_YET)
            this.value_ = this.closure_(...args);
        return this.value_;
    }
}
exports.Singleton = Singleton;
const NOT_MOUNTED_YET = {};
