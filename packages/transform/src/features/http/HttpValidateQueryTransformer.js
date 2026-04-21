"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpValidateQueryTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var HttpValidateQueryTransformer;
(function (HttpValidateQueryTransformer) {
    HttpValidateQueryTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "http.validateQuery", write: core_1.HttpValidateQueryProgrammer.write }));
})(HttpValidateQueryTransformer || (exports.HttpValidateQueryTransformer = HttpValidateQueryTransformer = {}));
//# sourceMappingURL=HttpValidateQueryTransformer.js.map