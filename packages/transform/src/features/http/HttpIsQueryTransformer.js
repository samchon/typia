"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpIsQueryTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var HttpIsQueryTransformer;
(function (HttpIsQueryTransformer) {
    HttpIsQueryTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "http.isQuery", write: core_1.HttpIsQueryProgrammer.write }));
})(HttpIsQueryTransformer || (exports.HttpIsQueryTransformer = HttpIsQueryTransformer = {}));
//# sourceMappingURL=HttpIsQueryTransformer.js.map