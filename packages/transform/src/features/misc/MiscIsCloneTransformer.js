"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscIsCloneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscIsCloneTransformer;
(function (MiscIsCloneTransformer) {
    MiscIsCloneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "misc.isClone", write: core_1.MiscIsCloneProgrammer.write }));
})(MiscIsCloneTransformer || (exports.MiscIsCloneTransformer = MiscIsCloneTransformer = {}));
//# sourceMappingURL=MiscIsCloneTransformer.js.map