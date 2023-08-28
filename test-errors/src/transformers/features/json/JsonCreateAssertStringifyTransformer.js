"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateAssertStringifyTransformer = void 0;
const JsonAssertStringifyProgrammer_1 = require("../../../programmers/json/JsonAssertStringifyProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateAssertStringifyTransformer;
(function (JsonCreateAssertStringifyTransformer) {
    JsonCreateAssertStringifyTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createAssertStringify")((project) => (modulo) => JsonAssertStringifyProgrammer_1.JsonAssertStringifyProgrammer.write(project)(modulo));
})(JsonCreateAssertStringifyTransformer || (exports.JsonCreateAssertStringifyTransformer = JsonCreateAssertStringifyTransformer = {}));
