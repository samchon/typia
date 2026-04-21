"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var IsTransformer;
(function (IsTransformer) {
    IsTransformer.transform = (config) => (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: config.equals ? "equals" : "is", write: (x) => core_1.IsProgrammer.write(Object.assign(Object.assign({}, x), { config })) }));
})(IsTransformer || (exports.IsTransformer = IsTransformer = {}));
//# sourceMappingURL=IsTransformer.js.map