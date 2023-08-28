"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIsStringifyTransformer = void 0;
const JsonIsStringifyProgrammer_1 = require("../../../programmers/json/JsonIsStringifyProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonIsStringifyTransformer;
(function (JsonIsStringifyTransformer) {
    JsonIsStringifyTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("isStringify")((project) => (modulo) => JsonIsStringifyProgrammer_1.JsonIsStringifyProgrammer.write(project)(modulo));
})(JsonIsStringifyTransformer || (exports.JsonIsStringifyTransformer = JsonIsStringifyTransformer = {}));
