"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateStringifyTransformer = void 0;
const JsonStringifyProgrammer_1 = require("../../../programmers/json/JsonStringifyProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateStringifyTransformer;
(function (JsonCreateStringifyTransformer) {
    JsonCreateStringifyTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createStringify")((project) => (modulo) => JsonStringifyProgrammer_1.JsonStringifyProgrammer.write(project)(modulo));
})(JsonCreateStringifyTransformer || (exports.JsonCreateStringifyTransformer = JsonCreateStringifyTransformer = {}));
