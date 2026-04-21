"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateValidatePruneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateValidatePruneTransformer;
(function (MiscCreateValidatePruneTransformer) {
    MiscCreateValidatePruneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "misc.createValidatePrune", write: core_1.MiscValidatePruneProgrammer.write }));
})(MiscCreateValidatePruneTransformer || (exports.MiscCreateValidatePruneTransformer = MiscCreateValidatePruneTransformer = {}));
//# sourceMappingURL=MiscCreateValidatePruneTransformer.js.map