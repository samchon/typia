"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateIsCloneTransformer = void 0;
const MiscIsCloneProgrammer_1 = require("../../../programmers/misc/MiscIsCloneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateIsCloneTransformer;
(function (MiscCreateIsCloneTransformer) {
    MiscCreateIsCloneTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createIsClone")((project) => (modulo) => MiscIsCloneProgrammer_1.MiscIsCloneProgrammer.write(project)(modulo));
})(MiscCreateIsCloneTransformer || (exports.MiscCreateIsCloneTransformer = MiscCreateIsCloneTransformer = {}));
