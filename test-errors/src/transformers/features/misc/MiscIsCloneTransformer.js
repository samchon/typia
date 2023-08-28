"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscIsCloneTransformer = void 0;
const MiscIsCloneProgrammer_1 = require("../../../programmers/misc/MiscIsCloneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscIsCloneTransformer;
(function (MiscIsCloneTransformer) {
    MiscIsCloneTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("isClone")((project) => (modulo) => MiscIsCloneProgrammer_1.MiscIsCloneProgrammer.write(project)(modulo));
})(MiscIsCloneTransformer || (exports.MiscIsCloneTransformer = MiscIsCloneTransformer = {}));
