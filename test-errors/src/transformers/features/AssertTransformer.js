"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertTransformer = void 0;
const AssertProgrammer_1 = require("../../programmers/AssertProgrammer");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var AssertTransformer;
(function (AssertTransformer) {
    AssertTransformer.transform = (equals) => GenericTransformer_1.GenericTransformer.scalar(equals ? "assertEquals" : "assert")((project) => (modulo) => AssertProgrammer_1.AssertProgrammer.write(project)(modulo)(equals));
})(AssertTransformer || (exports.AssertTransformer = AssertTransformer = {}));
