"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringifyPredicator = void 0;
var StringifyPredicator;
(function (StringifyPredicator) {
    StringifyPredicator.require_escape = (value) => value.split("").some((ch) => ESCAPED.some((escaped) => escaped === ch));
    StringifyPredicator.undefindable = (meta) => meta.isRequired() === false ||
        (meta.escaped !== null && meta.escaped.returns.isRequired() === false);
    const ESCAPED = ['"', "\\", "\b", "\f", "\n", "\n", "\r", "\t"];
})(StringifyPredicator || (exports.StringifyPredicator = StringifyPredicator = {}));
