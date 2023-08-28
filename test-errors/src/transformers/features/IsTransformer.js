"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTransformer = void 0;
const IsProgrammer_1 = require("../../programmers/IsProgrammer");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var IsTransformer;
(function (IsTransformer) {
    IsTransformer.transform = (equals) => GenericTransformer_1.GenericTransformer.scalar(equals ? "equals" : "is")((project) => (modulo) => IsProgrammer_1.IsProgrammer.write(project)(modulo)(equals));
})(IsTransformer || (exports.IsTransformer = IsTransformer = {}));
