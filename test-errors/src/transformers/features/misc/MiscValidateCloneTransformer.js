"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscValidateCloneTransformer = void 0;
const MiscValidateCloneProgrammer_1 = require("../../../programmers/misc/MiscValidateCloneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscValidateCloneTransformer;
(function (MiscValidateCloneTransformer) {
    MiscValidateCloneTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("validatClone")((project) => (modulo) => MiscValidateCloneProgrammer_1.MiscValidateCloneProgrammer.write(project)(modulo));
})(MiscValidateCloneTransformer || (exports.MiscValidateCloneTransformer = MiscValidateCloneTransformer = {}));
