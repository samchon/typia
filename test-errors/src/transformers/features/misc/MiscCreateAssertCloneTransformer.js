"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateAssertCloneTransformer = void 0;
const MiscAssertCloneProgrammer_1 = require("../../../programmers/misc/MiscAssertCloneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateAssertCloneTransformer;
(function (MiscCreateAssertCloneTransformer) {
    MiscCreateAssertCloneTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createAssertClone")((project) => (modulo) => MiscAssertCloneProgrammer_1.MiscAssertCloneProgrammer.write(project)(modulo));
})(MiscCreateAssertCloneTransformer || (exports.MiscCreateAssertCloneTransformer = MiscCreateAssertCloneTransformer = {}));
