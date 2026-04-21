"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssertTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var CreateAssertTransformer;
(function (CreateAssertTransformer) {
    CreateAssertTransformer.transform = (config) => (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: config.equals
            ? config.guard
                ? "assertGuardEquals"
                : "assertEquals"
            : config.guard
                ? "assertGuard"
                : "assert", write: (x) => core_1.AssertProgrammer.write(Object.assign(Object.assign({}, x), { config })) }));
})(CreateAssertTransformer || (exports.CreateAssertTransformer = CreateAssertTransformer = {}));
//# sourceMappingURL=CreateAssertTransformer.js.map