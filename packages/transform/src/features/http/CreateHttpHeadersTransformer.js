"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHttpHeadersTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateHttpHeadersTransformer;
(function (CreateHttpHeadersTransformer) {
    CreateHttpHeadersTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "http.createHeaders", write: core_1.HttpHeadersProgrammer.write }));
})(CreateHttpHeadersTransformer || (exports.CreateHttpHeadersTransformer = CreateHttpHeadersTransformer = {}));
//# sourceMappingURL=CreateHttpHeadersTransformer.js.map