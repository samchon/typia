"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateAssertParseTransformer = void 0;
const JsonAssertParseProgrammer_1 = require("../../../programmers/json/JsonAssertParseProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateAssertParseTransformer;
(function (JsonCreateAssertParseTransformer) {
    JsonCreateAssertParseTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createAssertParse")((project) => (modulo) => JsonAssertParseProgrammer_1.JsonAssertParseProgrammer.write(project)(modulo));
})(JsonCreateAssertParseTransformer || (exports.JsonCreateAssertParseTransformer = JsonCreateAssertParseTransformer = {}));
