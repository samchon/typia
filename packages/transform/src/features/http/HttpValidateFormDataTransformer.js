"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpValidateFormDataTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var HttpValidateFormDataTransformer;
(function (HttpValidateFormDataTransformer) {
    HttpValidateFormDataTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "http.validateFormData", write: core_1.HttpValidateFormDataProgrammer.write }));
})(HttpValidateFormDataTransformer || (exports.HttpValidateFormDataTransformer = HttpValidateFormDataTransformer = {}));
//# sourceMappingURL=HttpValidateFormDataTransformer.js.map