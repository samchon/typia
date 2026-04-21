"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpAssertFormDataTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var HttpAssertFormDataTransformer;
(function (HttpAssertFormDataTransformer) {
    HttpAssertFormDataTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "http.assertFormData", write: core_1.HttpAssertFormDataProgrammer.write }));
})(HttpAssertFormDataTransformer || (exports.HttpAssertFormDataTransformer = HttpAssertFormDataTransformer = {}));
//# sourceMappingURL=HttpAssertFormDataTransformer.js.map