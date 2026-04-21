"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpFormDataTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var HttpFormDataTransformer;
(function (HttpFormDataTransformer) {
    HttpFormDataTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "http.formdata", write: core_1.HttpFormDataProgrammer.write }));
})(HttpFormDataTransformer || (exports.HttpFormDataTransformer = HttpFormDataTransformer = {}));
//# sourceMappingURL=HttpFormDataTransformer.js.map