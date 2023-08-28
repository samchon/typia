"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateIsParseTransformer = void 0;
const JsonIsParseProgrammer_1 = require("../../../programmers/json/JsonIsParseProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateIsParseTransformer;
(function (JsonCreateIsParseTransformer) {
    JsonCreateIsParseTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createIsParse")((project) => (modulo) => JsonIsParseProgrammer_1.JsonIsParseProgrammer.write(project)(modulo));
})(JsonCreateIsParseTransformer || (exports.JsonCreateIsParseTransformer = JsonCreateIsParseTransformer = {}));
