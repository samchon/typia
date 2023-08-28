"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$report = void 0;
const $report = (array) => {
    const reportable = (path) => {
        if (array.length === 0)
            return true;
        const last = array[array.length - 1].path;
        return (path.length > last.length || last.substring(0, path.length) !== path);
    };
    return (exceptable, error) => {
        if (exceptable && reportable(error.path))
            array.push(error);
        return false;
    };
};
exports.$report = $report;
