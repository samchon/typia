"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHttpValidateQueryTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateHttpValidateQueryTransformer;
(function (CreateHttpValidateQueryTransformer) {
    CreateHttpValidateQueryTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "http.createValidateQuery", write: core_1.HttpValidateQueryProgrammer.write }));
})(CreateHttpValidateQueryTransformer || (exports.CreateHttpValidateQueryTransformer = CreateHttpValidateQueryTransformer = {}));
//# sourceMappingURL=CreateHttpValidateQueryTransformer.js.map