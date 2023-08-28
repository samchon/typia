"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateIsPruneTransformer = void 0;
const MiscIsPruneProgrammer_1 = require("../../../programmers/misc/MiscIsPruneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateIsPruneTransformer;
(function (MiscCreateIsPruneTransformer) {
    MiscCreateIsPruneTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createIsPrune")((project) => (modulo) => MiscIsPruneProgrammer_1.MiscIsPruneProgrammer.write(project)(modulo));
})(MiscCreateIsPruneTransformer || (exports.MiscCreateIsPruneTransformer = MiscCreateIsPruneTransformer = {}));
