"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCreateIsPruneTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var MiscCreateIsPruneTransformer;
(function (MiscCreateIsPruneTransformer) {
    MiscCreateIsPruneTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "misc.createIsPrune", write: core_1.MiscIsPruneProgrammer.write }));
})(MiscCreateIsPruneTransformer || (exports.MiscCreateIsPruneTransformer = MiscCreateIsPruneTransformer = {}));
//# sourceMappingURL=MiscCreateIsPruneTransformer.js.map