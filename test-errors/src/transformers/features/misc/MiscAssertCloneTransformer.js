"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscAssertCloneTransformer = void 0;
const MiscAssertCloneProgrammer_1 = require("../../../programmers/misc/MiscAssertCloneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscAssertCloneTransformer;
(function (MiscAssertCloneTransformer) {
    MiscAssertCloneTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("assertClone")((project) => (modulo) => MiscAssertCloneProgrammer_1.MiscAssertCloneProgrammer.write(project)(modulo));
})(MiscAssertCloneTransformer || (exports.MiscAssertCloneTransformer = MiscAssertCloneTransformer = {}));
