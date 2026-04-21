"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpValidateHeadersTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var HttpValidateHeadersTransformer;
(function (HttpValidateHeadersTransformer) {
    HttpValidateHeadersTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "http.validateHeaders", write: core_1.HttpValidateHeadersProgrammer.write }));
})(HttpValidateHeadersTransformer || (exports.HttpValidateHeadersTransformer = HttpValidateHeadersTransformer = {}));
//# sourceMappingURL=HttpValidateHeadersTransformer.js.map