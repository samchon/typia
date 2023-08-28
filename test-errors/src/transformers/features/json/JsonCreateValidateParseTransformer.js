"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateValidateParseTransformer = void 0;
const JsonValidateParseProgrammer_1 = require("../../../programmers/json/JsonValidateParseProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateValidateParseTransformer;
(function (JsonCreateValidateParseTransformer) {
    JsonCreateValidateParseTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createValidateParse")((project) => (modulo) => JsonValidateParseProgrammer_1.JsonValidateParseProgrammer.write(project)(modulo));
})(JsonCreateValidateParseTransformer || (exports.JsonCreateValidateParseTransformer = JsonCreateValidateParseTransformer = {}));
