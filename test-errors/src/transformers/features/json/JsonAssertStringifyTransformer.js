"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAssertStringifyTransformer = void 0;
const JsonAssertStringifyProgrammer_1 = require("../../../programmers/json/JsonAssertStringifyProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonAssertStringifyTransformer;
(function (JsonAssertStringifyTransformer) {
    JsonAssertStringifyTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("assertStringify")((project) => (modulo) => JsonAssertStringifyProgrammer_1.JsonAssertStringifyProgrammer.write(project)(modulo));
})(JsonAssertStringifyTransformer || (exports.JsonAssertStringifyTransformer = JsonAssertStringifyTransformer = {}));
