"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateAssertPruneTransformer = void 0;
const MiscAssertPruneProgrammer_1 = require("../../../programmers/misc/MiscAssertPruneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateAssertPruneTransformer;
(function (MiscCreateAssertPruneTransformer) {
    MiscCreateAssertPruneTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createAssertPrune")((project) => (modulo) => MiscAssertPruneProgrammer_1.MiscAssertPruneProgrammer.write(project)(modulo));
})(MiscCreateAssertPruneTransformer || (exports.MiscCreateAssertPruneTransformer = MiscCreateAssertPruneTransformer = {}));
