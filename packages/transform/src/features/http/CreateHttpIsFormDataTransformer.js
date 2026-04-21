"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHttpIsFormDataTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateHttpIsFormDataTransformer;
(function (CreateHttpIsFormDataTransformer) {
    CreateHttpIsFormDataTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "http.createIsFormData", write: core_1.HttpIsFormDataProgrammer.write }));
})(CreateHttpIsFormDataTransformer || (exports.CreateHttpIsFormDataTransformer = CreateHttpIsFormDataTransformer = {}));
//# sourceMappingURL=CreateHttpIsFormDataTransformer.js.map