"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidateTransformer = void 0;
const ValidateProgrammer_1 = require("../../programmers/ValidateProgrammer");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var CreateValidateTransformer;
(function (CreateValidateTransformer) {
    CreateValidateTransformer.transform = (equals) => GenericTransformer_1.GenericTransformer.factory(equals ? "createValidateEquals" : "createValidate")((project) => (modulo) => ValidateProgrammer_1.ValidateProgrammer.write(project)(modulo)(equals));
})(CreateValidateTransformer || (exports.CreateValidateTransformer = CreateValidateTransformer = {}));
