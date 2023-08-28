"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscValidatePruneTransformer = void 0;
const MiscValidatePruneProgrammer_1 = require("../../../programmers/misc/MiscValidatePruneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscValidatePruneTransformer;
(function (MiscValidatePruneTransformer) {
    MiscValidatePruneTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("validatPrune")((project) => (modulo) => MiscValidatePruneProgrammer_1.MiscValidatePruneProgrammer.write(project)(modulo));
})(MiscValidatePruneTransformer || (exports.MiscValidatePruneTransformer = MiscValidatePruneTransformer = {}));
