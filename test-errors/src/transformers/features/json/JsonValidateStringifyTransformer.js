"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonValidateStringifyTransformer = void 0;
const JsonValidateStringifyProgrammer_1 = require("../../../programmers/json/JsonValidateStringifyProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonValidateStringifyTransformer;
(function (JsonValidateStringifyTransformer) {
    JsonValidateStringifyTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("validatStringify")((project) => (modulo) => JsonValidateStringifyProgrammer_1.JsonValidateStringifyProgrammer.write(project)(modulo));
})(JsonValidateStringifyTransformer || (exports.JsonValidateStringifyTransformer = JsonValidateStringifyTransformer = {}));
