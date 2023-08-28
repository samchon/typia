"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateValidatePruneTransformer = void 0;
const MiscValidatePruneProgrammer_1 = require("../../../programmers/misc/MiscValidatePruneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateValidatePruneTransformer;
(function (MiscCreateValidatePruneTransformer) {
    MiscCreateValidatePruneTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createValidatePrune")((project) => (modulo) => MiscValidatePruneProgrammer_1.MiscValidatePruneProgrammer.write(project)(modulo));
})(MiscCreateValidatePruneTransformer || (exports.MiscCreateValidatePruneTransformer = MiscCreateValidatePruneTransformer = {}));
