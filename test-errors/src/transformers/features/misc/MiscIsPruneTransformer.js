"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscIsPruneTransformer = void 0;
const MiscIsPruneProgrammer_1 = require("../../../programmers/misc/MiscIsPruneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscIsPruneTransformer;
(function (MiscIsPruneTransformer) {
    MiscIsPruneTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("isPrune")((project) => (modulo) => MiscIsPruneProgrammer_1.MiscIsPruneProgrammer.write(project)(modulo));
})(MiscIsPruneTransformer || (exports.MiscIsPruneTransformer = MiscIsPruneTransformer = {}));
