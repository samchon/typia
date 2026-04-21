"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscIsPruneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscIsPruneTransformer;
(function (MiscIsPruneTransformer) {
    MiscIsPruneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "misc.isPrune", write: core_1.MiscIsPruneProgrammer.write }));
})(MiscIsPruneTransformer || (exports.MiscIsPruneTransformer = MiscIsPruneTransformer = {}));
//# sourceMappingURL=MiscIsPruneTransformer.js.map