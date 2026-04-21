"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidateTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var CreateValidateTransformer;
(function (CreateValidateTransformer) {
    CreateValidateTransformer.transform = (config) => (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: config.equals ? "validateEquals" : "validate", write: (x) => core_1.ValidateProgrammer.write(Object.assign(Object.assign({}, x), { config })) }));
})(CreateValidateTransformer || (exports.CreateValidateTransformer = CreateValidateTransformer = {}));
//# sourceMappingURL=CreateValidateTransformer.js.map