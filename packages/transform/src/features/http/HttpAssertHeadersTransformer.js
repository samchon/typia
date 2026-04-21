"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpAssertHeadersTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var HttpAssertHeadersTransformer;
(function (HttpAssertHeadersTransformer) {
    HttpAssertHeadersTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "http.assertHeaders", write: core_1.HttpAssertHeadersProgrammer.write }));
})(HttpAssertHeadersTransformer || (exports.HttpAssertHeadersTransformer = HttpAssertHeadersTransformer = {}));
//# sourceMappingURL=HttpAssertHeadersTransformer.js.map