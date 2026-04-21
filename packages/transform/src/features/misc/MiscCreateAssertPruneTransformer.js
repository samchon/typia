"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateAssertPruneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateAssertPruneTransformer;
(function (MiscCreateAssertPruneTransformer) {
    MiscCreateAssertPruneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "misc.createAssertPrune", write: core_1.MiscAssertPruneProgrammer.write }));
})(MiscCreateAssertPruneTransformer || (exports.MiscCreateAssertPruneTransformer = MiscCreateAssertPruneTransformer = {}));
//# sourceMappingURL=MiscCreateAssertPruneTransformer.js.map