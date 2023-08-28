"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssertTransformer = void 0;
const AssertProgrammer_1 = require("../../programmers/AssertProgrammer");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var CreateAssertTransformer;
(function (CreateAssertTransformer) {
    CreateAssertTransformer.transform = (equals) => GenericTransformer_1.GenericTransformer.factory(equals ? "createAssertEquals" : "createAssert")((project) => (modulo) => AssertProgrammer_1.AssertProgrammer.write(project)(modulo)(equals));
})(CreateAssertTransformer || (exports.CreateAssertTransformer = CreateAssertTransformer = {}));
