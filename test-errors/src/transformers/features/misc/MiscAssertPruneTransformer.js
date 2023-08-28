"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscAssertPruneTransformer = void 0;
const MiscAssertPruneProgrammer_1 = require("../../../programmers/misc/MiscAssertPruneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscAssertPruneTransformer;
(function (MiscAssertPruneTransformer) {
    MiscAssertPruneTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("assertPrune")((project) => (modulo) => MiscAssertPruneProgrammer_1.MiscAssertPruneProgrammer.write(project)(modulo));
})(MiscAssertPruneTransformer || (exports.MiscAssertPruneTransformer = MiscAssertPruneTransformer = {}));
