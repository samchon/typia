"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_templates = void 0;
const application_default_string_1 = require("./application_default_string");
const metadata_to_pattern_1 = require("./metadata_to_pattern");
/**
 * @internal
 */
const application_templates = (meta) => (attribute) => {
    // CONSTRUCT PATTERN
    const output = {
        type: "string",
        ...attribute,
    };
    output.pattern = (0, metadata_to_pattern_1.metadata_to_pattern)(true)(meta);
    // DEFAULT VALUE
    output.default = (0, application_default_string_1.application_default_string)(meta)(attribute)(output);
    // RETURNS
    return output;
};
exports.application_templates = application_templates;
