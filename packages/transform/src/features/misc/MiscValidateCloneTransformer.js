"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscValidateCloneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscValidateCloneTransformer;
(function (MiscValidateCloneTransformer) {
    MiscValidateCloneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "misc.validateClone", write: core_1.MiscValidateCloneProgrammer.write }));
})(MiscValidateCloneTransformer || (exports.MiscValidateCloneTransformer = MiscValidateCloneTransformer = {}));
//# sourceMappingURL=MiscValidateCloneTransformer.js.map