"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateCloneTransformer = void 0;
const MiscCloneProgrammer_1 = require("../../../programmers/misc/MiscCloneProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateCloneTransformer;
(function (MiscCreateCloneTransformer) {
    MiscCreateCloneTransformer.transform = GenericTransformer_1.GenericTransformer.factory("createClone")((project) => (modulo) => MiscCloneProgrammer_1.MiscCloneProgrammer.write(project)(modulo));
})(MiscCreateCloneTransformer || (exports.MiscCreateCloneTransformer = MiscCreateCloneTransformer = {}));
