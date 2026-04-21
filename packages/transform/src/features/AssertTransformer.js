"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var AssertTransformer;
(function (AssertTransformer) {
    AssertTransformer.transform = (config) => (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: config.equals
            ? config.guard
                ? "assertGuardEquals"
                : "assertEquals"
            : config.guard
                ? "assertGuard"
                : "assert", write: (x) => core_1.AssertProgrammer.write(Object.assign(Object.assign({}, x), { config })) }));
})(AssertTransformer || (exports.AssertTransformer = AssertTransformer = {}));
//# sourceMappingURL=AssertTransformer.js.map