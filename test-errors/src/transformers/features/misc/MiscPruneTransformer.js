"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscPruneTransformer = void 0;
const MiscPruneProgrammer_1 = require("../../../programmers/misc/MiscPruneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscPruneTransformer;
(function (MiscPruneTransformer) {
    MiscPruneTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("prune")((project) => (modulo) => MiscPruneProgrammer_1.MiscPruneProgrammer.write(project)(modulo));
})(MiscPruneTransformer || (exports.MiscPruneTransformer = MiscPruneTransformer = {}));
