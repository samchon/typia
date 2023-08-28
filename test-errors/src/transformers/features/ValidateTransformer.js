"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateTransformer = void 0;
const ValidateProgrammer_1 = require("../../programmers/ValidateProgrammer");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var ValidateTransformer;
(function (ValidateTransformer) {
    ValidateTransformer.transform = (equals) => GenericTransformer_1.GenericTransformer.scalar(equals ? "validateEquals" : "validate")((project) => (modulo) => ValidateProgrammer_1.ValidateProgrammer.write(project)(modulo)(equals));
})(ValidateTransformer || (exports.ValidateTransformer = ValidateTransformer = {}));
