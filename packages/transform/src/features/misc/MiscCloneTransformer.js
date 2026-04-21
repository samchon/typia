"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCloneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCloneTransformer;
(function (MiscCloneTransformer) {
    MiscCloneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "misc.clone", write: core_1.MiscCloneProgrammer.write }));
})(MiscCloneTransformer || (exports.MiscCloneTransformer = MiscCloneTransformer = {}));
//# sourceMappingURL=MiscCloneTransformer.js.map