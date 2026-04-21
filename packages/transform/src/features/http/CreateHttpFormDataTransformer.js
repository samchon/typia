"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHttpFormDataTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateHttpFormDataTransformer;
(function (CreateHttpFormDataTransformer) {
    CreateHttpFormDataTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "http.createFormData", write: core_1.HttpFormDataProgrammer.write }));
})(CreateHttpFormDataTransformer || (exports.CreateHttpFormDataTransformer = CreateHttpFormDataTransformer = {}));
//# sourceMappingURL=CreateHttpFormDataTransformer.js.map