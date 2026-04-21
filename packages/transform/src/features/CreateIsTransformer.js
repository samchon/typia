"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIsTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var CreateIsTransformer;
(function (CreateIsTransformer) {
    CreateIsTransformer.transform = (config) => (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: config.equals ? "equals" : "is", write: (x) => core_1.IsProgrammer.write(Object.assign(Object.assign({}, x), { config })) }));
})(CreateIsTransformer || (exports.CreateIsTransformer = CreateIsTransformer = {}));
//# sourceMappingURL=CreateIsTransformer.js.map