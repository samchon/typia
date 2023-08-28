"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_array = void 0;
const application_schema_1 = require("./application_schema");
/**
 * @internal
 */
const application_array = (options) => (components) => (array) => (attribute) => {
    // BASE SCHEMA
    const items = (0, application_schema_1.application_schema)(options)(false)(components)(array.type.value)(attribute);
    const base = {
        ...attribute,
        type: "array",
        items: null,
    };
    const out = (schema) => {
        schema.items = items;
        return schema;
    };
    if (array.tags.length === 0)
        return [out(base)];
    // CONSIDER TYPE TAGS
    const union = array.tags.map((row) => application_array_tags({ ...base })(row));
    const map = new Map(union.map((u) => [JSON.stringify(u), u]));
    return [...map.values()].map((s) => out(s));
};
exports.application_array = application_array;
const application_array_tags = (schema) => (row) => {
    for (const tag of row
        .slice()
        .sort((a, b) => a.kind.localeCompare(b.kind)))
        if (tag.kind === "minItems" && typeof tag.value === "number")
            schema.minItems = tag.value;
        else if (tag.kind === "maxItems" && typeof tag.value === "number")
            schema.maxItems = tag.value;
    return schema;
};
