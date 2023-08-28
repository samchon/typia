"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateValidateCloneTransformer = void 0;
const MiscValidateCloneProgrammer_1 = require("../../../programmers/misc/MiscValidateCloneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateValidateCloneTransformer;
(function (MiscCreateValidateCloneTransformer) {
    MiscCreateValidateCloneTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createValidateClone")((project) => (modulo) => MiscValidateCloneProgrammer_1.MiscValidateCloneProgrammer.write(project)(modulo));
})(MiscCreateValidateCloneTransformer || (exports.MiscCreateValidateCloneTransformer = MiscCreateValidateCloneTransformer = {}));
