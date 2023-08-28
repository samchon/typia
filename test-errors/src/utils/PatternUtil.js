"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatternUtil = void 0;
var PatternUtil;
(function (PatternUtil) {
    PatternUtil.fix = (str) => {
        const first = str.indexOf(PatternUtil.STRING);
        const last = str.lastIndexOf(PatternUtil.STRING);
        return [
            first === -1 || none("(")(str.slice(0, first)) ? "^" : "",
            str,
            last === -1 || none(")")(str.slice(last + PatternUtil.STRING.length))
                ? "$"
                : "",
        ].join("");
    };
    PatternUtil.escape = (str) => {
        return str
            .replace(/[|\\/{}()[\]^$+*?.]/g, "\\$&")
            .replace(/-/g, "\\x2d");
    };
    PatternUtil.NUMBER = "[+-]?" + // optional sign
        "\\d+(?:\\.\\d+)?" + // integer or decimal
        "(?:[eE][+-]?\\d+)?"; // optional exponent
    PatternUtil.BOOLEAN = "true|false";
    PatternUtil.STRING = "(.*)";
})(PatternUtil || (exports.PatternUtil = PatternUtil = {}));
const none = (parenthesis) => (str) => {
    for (const ch of str)
        if (ch !== parenthesis)
            return true;
    return false;
};
