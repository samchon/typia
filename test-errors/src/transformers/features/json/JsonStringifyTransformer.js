"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonStringifyTransformer = void 0;
const JsonStringifyProgrammer_1 = require("../../../programmers/json/JsonStringifyProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonStringifyTransformer;
(function (JsonStringifyTransformer) {
    JsonStringifyTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("stringify")((project) => (modulo) => JsonStringifyProgrammer_1.JsonStringifyProgrammer.write(project)(modulo));
})(JsonStringifyTransformer || (exports.JsonStringifyTransformer = JsonStringifyTransformer = {}));
