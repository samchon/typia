"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreatePruneTransformer = void 0;
const MiscPruneProgrammer_1 = require("../../../programmers/misc/MiscPruneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreatePruneTransformer;
(function (MiscCreatePruneTransformer) {
    MiscCreatePruneTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createPrune")((project) => (modulo) => MiscPruneProgrammer_1.MiscPruneProgrammer.write(project)(modulo));
})(MiscCreatePruneTransformer || (exports.MiscCreatePruneTransformer = MiscCreatePruneTransformer = {}));
