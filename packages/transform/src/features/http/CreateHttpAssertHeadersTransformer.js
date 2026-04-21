"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHttpAssertHeadersTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateHttpAssertHeadersTransformer;
(function (CreateHttpAssertHeadersTransformer) {
    CreateHttpAssertHeadersTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "http.createAssertHeaders", write: core_1.HttpAssertHeadersProgrammer.write }));
})(CreateHttpAssertHeadersTransformer || (exports.CreateHttpAssertHeadersTransformer = CreateHttpAssertHeadersTransformer = {}));
//# sourceMappingURL=CreateHttpAssertHeadersTransformer.js.map