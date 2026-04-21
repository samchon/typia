"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHttpIsQueryTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateHttpIsQueryTransformer;
(function (CreateHttpIsQueryTransformer) {
    CreateHttpIsQueryTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "http.createIsQuery", write: core_1.HttpIsQueryProgrammer.write }));
})(CreateHttpIsQueryTransformer || (exports.CreateHttpIsQueryTransformer = CreateHttpIsQueryTransformer = {}));
//# sourceMappingURL=CreateHttpIsQueryTransformer.js.map