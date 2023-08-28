"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAssertParseTransformer = void 0;
const JsonAssertParseProgrammer_1 = require("../../../programmers/json/JsonAssertParseProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonAssertParseTransformer;
(function (JsonAssertParseTransformer) {
    JsonAssertParseTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("assertParse")((project) => (modulo) => JsonAssertParseProgrammer_1.JsonAssertParseProgrammer.write(project)(modulo));
})(JsonAssertParseTransformer || (exports.JsonAssertParseTransformer = JsonAssertParseTransformer = {}));
