"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_string = void 0;
const application_default_string_1 = require("./application_default_string");
/**
 * @internal
 */
const application_string = (meta) => (atomic) => (attribute) => {
    // DEFAULT CONFIGURATION
    const base = {
        ...attribute,
        type: "string",
    };
    const out = (schema) => {
        schema.default = (0, application_default_string_1.application_default_string)(meta)(attribute)(base);
        return schema;
    };
    if (atomic.tags.length === 0)
        return [out(base)];
    // CONSIDER TYPE TAGS
    const union = atomic.tags.map((row) => application_string_tags({ ...base })(row));
    const map = new Map(union.map((u) => [JSON.stringify(u), u]));
    return [...map.values()].map((s) => out(s));
};
exports.application_string = application_string;
const application_string_tags = (schema) => (row) => {
    for (const tag of row
        .slice()
        .sort((a, b) => a.kind.localeCompare(b.kind)))
        if (tag.kind === "minLength" && typeof tag.value === "number")
            schema.minLength = tag.value;
        else if (tag.kind === "maxLength" && typeof tag.value === "number")
            schema.maxLength = tag.value;
        else if (tag.kind === "format" && typeof tag.value === "string")
            schema.format = tag.value;
        else if (tag.kind === "pattern")
            schema.pattern = tag.value;
    return schema;
};
