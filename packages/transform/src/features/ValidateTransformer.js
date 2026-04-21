"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../internal/GenericTransformer");
var ValidateTransformer;
(function (ValidateTransformer) {
    ValidateTransformer.transform = (config) => (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: config.equals ? "validateEquals" : "validate", write: (x) => core_1.ValidateProgrammer.write(Object.assign(Object.assign({}, x), { config })) }));
})(ValidateTransformer || (exports.ValidateTransformer = ValidateTransformer = {}));
//# sourceMappingURL=ValidateTransformer.js.map