"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHttpAssertQueryTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateHttpAssertQueryTransformer;
(function (CreateHttpAssertQueryTransformer) {
    CreateHttpAssertQueryTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "http.createAssertQuery", write: core_1.HttpAssertQueryProgrammer.write }));
})(CreateHttpAssertQueryTransformer || (exports.CreateHttpAssertQueryTransformer = CreateHttpAssertQueryTransformer = {}));
//# sourceMappingURL=CreateHttpAssertQueryTransformer.js.map