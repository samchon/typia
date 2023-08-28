"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateValidateStringifyTransformer = void 0;
const JsonValidateStringifyProgrammer_1 = require("../../../programmers/json/JsonValidateStringifyProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateValidateStringifyTransformer;
(function (JsonCreateValidateStringifyTransformer) {
    JsonCreateValidateStringifyTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createValidateStringify")((project) => (modulo) => JsonValidateStringifyProgrammer_1.JsonValidateStringifyProgrammer.write(project)(modulo));
})(JsonCreateValidateStringifyTransformer || (exports.JsonCreateValidateStringifyTransformer = JsonCreateValidateStringifyTransformer = {}));
