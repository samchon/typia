"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_escaped = void 0;
const application_schema_1 = require("./application_schema");
const application_escaped = (options) => (blockNever) => (components) => (resolved) => (attribute) => {
    const output = (0, application_schema_1.application_schema)(options)(blockNever)(components)(resolved.returns)(attribute);
    if (output === null)
        return [];
    if (is_date(new Set())(resolved.original)) {
        const string = is_string(output)
            ? output
            : is_one_of(output)
                ? output.oneOf.find(is_string)
                : undefined;
        if (string !== undefined &&
            string.format !== "date" &&
            string.format !== "date-time")
            string.format = "date-time";
    }
    return is_one_of(output) ? output.oneOf : [output];
};
exports.application_escaped = application_escaped;
const is_string = (elem) => elem.type === "string";
const is_one_of = (elem) => Array.isArray(elem.oneOf);
const is_date = (visited) => (meta) => {
    if (visited.has(meta))
        return false;
    visited.add(meta);
    return (meta.natives.some((name) => name === "Date") ||
        meta.arrays.some((array) => is_date(visited)(array.type.value)) ||
        meta.tuples.some((tuple) => tuple.type.elements.some(is_date(visited))) ||
        meta.aliases.some((alias) => is_date(visited)(alias.value)));
};
