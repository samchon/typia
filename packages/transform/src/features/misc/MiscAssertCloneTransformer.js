"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscAssertCloneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscAssertCloneTransformer;
(function (MiscAssertCloneTransformer) {
    MiscAssertCloneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "misc.assertClone", write: core_1.MiscAssertCloneProgrammer.write }));
})(MiscAssertCloneTransformer || (exports.MiscAssertCloneTransformer = MiscAssertCloneTransformer = {}));
//# sourceMappingURL=MiscAssertCloneTransformer.js.map