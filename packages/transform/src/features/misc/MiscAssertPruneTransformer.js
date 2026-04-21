"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscAssertPruneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscAssertPruneTransformer;
(function (MiscAssertPruneTransformer) {
    MiscAssertPruneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "misc.assertPrune", write: core_1.MiscAssertPruneProgrammer.write }));
})(MiscAssertPruneTransformer || (exports.MiscAssertPruneTransformer = MiscAssertPruneTransformer = {}));
//# sourceMappingURL=MiscAssertPruneTransformer.js.map