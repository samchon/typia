"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_number = void 0;
const application_default_1 = require("./application_default");
/**
 * @internal
 */
const application_number = (atomic) => (attribute) => {
    // BASE CONFIGURATION
    const base = {
        ...attribute,
        type: "number",
    };
    const out = (schema) => {
        schema.default = (0, application_default_1.application_default)(attribute)((str) => {
            const value = Number(str);
            const conditions = [!Number.isNaN(value)];
            if (schema.minimum !== undefined)
                if (schema.exclusiveMinimum === true)
                    conditions.push(value > schema.minimum);
                else
                    conditions.push(value >= schema.minimum);
            if (schema.maximum !== undefined)
                if (schema.exclusiveMaximum === true)
                    conditions.push(value < schema.maximum);
                else
                    conditions.push(value <= schema.maximum);
            if (schema.multipleOf !== undefined)
                conditions.push(value % schema.multipleOf === 0);
            return conditions.every((cond) => cond);
        })((str) => Number(str));
        return schema;
    };
    if (atomic.tags.length === 0)
        return [out(base)];
    // CONSIDER TYPE TAGS
    const union = atomic.tags.map((row) => application_number_tags({ ...base })(row));
    const map = new Map(union.map((u) => [JSON.stringify(u), u]));
    return [...map.values()].map((s) => out(s));
};
exports.application_number = application_number;
const application_number_tags = (schema) => (row) => {
    for (const tag of row
        .slice()
        .sort((a, b) => a.kind.localeCompare(b.kind))) {
        if (tag.kind === "type" &&
            (tag.value === "int32" ||
                tag.value === "uint32" ||
                tag.value === "int64" ||
                tag.value === "uint64"))
            schema.type = "integer";
        else if (tag.kind === "minimum" && typeof tag.value === "number")
            schema.minimum = tag.value;
        else if (tag.kind === "maximum" && typeof tag.value === "number")
            schema.maximum = tag.value;
        else if (tag.kind === "exclusiveMinimum" &&
            typeof tag.value === "number") {
            schema.minimum = tag.value;
            schema.exclusiveMinimum = true;
        }
        else if (tag.kind === "exclusiveMaximum" &&
            typeof tag.value === "number") {
            schema.maximum = tag.value;
            schema.exclusiveMaximum = true;
        }
        else if (tag.kind === "multipleOf" &&
            typeof tag.value === "number")
            schema.multipleOf = tag.value;
    }
    return schema;
};
