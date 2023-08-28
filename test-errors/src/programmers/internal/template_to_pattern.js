"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template_to_pattern = void 0;
const PatternUtil_1 = require("../../utils/PatternUtil");
const metadata_to_pattern_1 = require("./metadata_to_pattern");
/**
 * @internal
 */
const template_to_pattern = (top) => (template) => {
    const pattern = template
        .map((meta) => (0, metadata_to_pattern_1.metadata_to_pattern)(false)(meta))
        .join("");
    return top ? PatternUtil_1.PatternUtil.fix(pattern) : pattern;
};
exports.template_to_pattern = template_to_pattern;
