"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIsParseTransformer = void 0;
const JsonIsParseProgrammer_1 = require("../../../programmers/json/JsonIsParseProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonIsParseTransformer;
(function (JsonIsParseTransformer) {
    JsonIsParseTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("isParse")((project) => (modulo) => JsonIsParseProgrammer_1.JsonIsParseProgrammer.write(project)(modulo));
})(JsonIsParseTransformer || (exports.JsonIsParseTransformer = JsonIsParseTransformer = {}));
