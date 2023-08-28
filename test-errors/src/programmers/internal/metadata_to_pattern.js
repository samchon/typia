"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata_to_pattern = void 0;
const ArrayUtil_1 = require("../../utils/ArrayUtil");
const PatternUtil_1 = require("../../utils/PatternUtil");
const template_to_pattern_1 = require("./template_to_pattern");
/**
 * @internal
 */
const metadata_to_pattern = (top) => (meta) => {
    if (meta.atomics.find((a) => a.type === "string") !== undefined)
        return "(.*)";
    const values = ArrayUtil_1.ArrayUtil.flat(meta.constants.map((c) => {
        if (c.type !== "string")
            return c.values.map((v) => v.toString());
        return c.values.map((str) => PatternUtil_1.PatternUtil.escape(str));
    }));
    for (const a of meta.atomics)
        if (a.type === "number" || a.type === "bigint")
            values.push(PatternUtil_1.PatternUtil.NUMBER);
        else if (a.type === "boolean")
            values.push(PatternUtil_1.PatternUtil.BOOLEAN);
    for (const childTpl of meta.templates)
        values.push("(" + (0, template_to_pattern_1.template_to_pattern)(false)(childTpl) + ")");
    const pattern = values.length === 1 ? values[0] : "(" + values.join("|") + ")";
    return top ? PatternUtil_1.PatternUtil.fix(pattern) : pattern;
};
exports.metadata_to_pattern = metadata_to_pattern;
