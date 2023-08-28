"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonValidateParseTransformer = void 0;
const JsonValidateParseProgrammer_1 = require("../../../programmers/json/JsonValidateParseProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonValidateParseTransformer;
(function (JsonValidateParseTransformer) {
    JsonValidateParseTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("validatParse")((project) => (modulo) => JsonValidateParseProgrammer_1.JsonValidateParseProgrammer.write(project)(modulo));
})(JsonValidateParseTransformer || (exports.JsonValidateParseTransformer = JsonValidateParseTransformer = {}));
