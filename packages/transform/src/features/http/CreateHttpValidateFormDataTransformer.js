"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHttpValidateFormDataTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateHttpValidateFormDataTransformer;
(function (CreateHttpValidateFormDataTransformer) {
    CreateHttpValidateFormDataTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "http.createValidateFormData", write: core_1.HttpValidateFormDataProgrammer.write }));
})(CreateHttpValidateFormDataTransformer || (exports.CreateHttpValidateFormDataTransformer = CreateHttpValidateFormDataTransformer = {}));
//# sourceMappingURL=CreateHttpValidateFormDataTransformer.js.map