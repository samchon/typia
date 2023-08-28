"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCloneTransformer = void 0;
const MiscCloneProgrammer_1 = require("../../../programmers/misc/MiscCloneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCloneTransformer;
(function (MiscCloneTransformer) {
    MiscCloneTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("clone")((project) => (modulo) => MiscCloneProgrammer_1.MiscCloneProgrammer.write(project)(modulo));
})(MiscCloneTransformer || (exports.MiscCloneTransformer = MiscCloneTransformer = {}));
