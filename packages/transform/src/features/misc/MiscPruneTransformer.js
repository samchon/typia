"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscPruneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscPruneTransformer;
(function (MiscPruneTransformer) {
    MiscPruneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "misc.prune", write: core_1.MiscPruneProgrammer.write }));
})(MiscPruneTransformer || (exports.MiscPruneTransformer = MiscPruneTransformer = {}));
//# sourceMappingURL=MiscPruneTransformer.js.map