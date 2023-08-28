"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_default_string = void 0;
const application_default_1 = require("./application_default");
/**
 * @internal
 */
const application_default_string = (meta) => (attribute) => (schema) => (0, application_default_1.application_default)(attribute)((str) => {
    const conditions = [];
    // OTHER ATOMIC TYPES
    if (meta.atomics.find((a) => a.type === "number" || a.type === "bigint"))
        conditions.push(Number.isNaN(Number(str)));
    if (meta.atomics.find((a) => a.type === "boolean"))
        conditions.push(str !== "true" && str !== "false");
    for (const constant of meta.constants)
        for (const value of constant.values)
            conditions.push(str !== value.toString());
    // CONSIDER TAGS
    if (schema.minLength !== undefined)
        conditions.push(str.length >= schema.minLength);
    if (schema.maxLength !== undefined)
        conditions.push(str.length <= schema.maxLength);
    if (schema.pattern !== undefined)
        conditions.push(new RegExp(schema.pattern).test(str));
    return conditions.every((c) => c);
})((str) => str);
exports.application_default_string = application_default_string;
