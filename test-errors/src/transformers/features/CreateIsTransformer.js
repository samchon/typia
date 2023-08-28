"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIsTransformer = void 0;
const IsProgrammer_1 = require("../../programmers/IsProgrammer");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var CreateIsTransformer;
(function (CreateIsTransformer) {
    CreateIsTransformer.transform = (equals) => GenericTransformer_1.GenericTransformer.factory(equals ? "createEquals" : "createIs")((project) => (modulo) => IsProgrammer_1.IsProgrammer.write(project)(modulo)(equals));
})(CreateIsTransformer || (exports.CreateIsTransformer = CreateIsTransformer = {}));
