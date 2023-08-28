"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateIsStringifyTransformer = void 0;
const JsonIsStringifyProgrammer_1 = require("../../../programmers/json/JsonIsStringifyProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateIsStringifyTransformer;
(function (JsonCreateIsStringifyTransformer) {
    JsonCreateIsStringifyTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createIsStringify")((project) => (modulo) => JsonIsStringifyProgrammer_1.JsonIsStringifyProgrammer.write(project)(modulo));
})(JsonCreateIsStringifyTransformer || (exports.JsonCreateIsStringifyTransformer = JsonCreateIsStringifyTransformer = {}));
