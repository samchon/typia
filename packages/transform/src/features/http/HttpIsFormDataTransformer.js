"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpIsFormDataTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var HttpIsFormDataTransformer;
(function (HttpIsFormDataTransformer) {
    HttpIsFormDataTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "http.isFormData", write: core_1.HttpIsFormDataProgrammer.write }));
})(HttpIsFormDataTransformer || (exports.HttpIsFormDataTransformer = HttpIsFormDataTransformer = {}));
//# sourceMappingURL=HttpIsFormDataTransformer.js.map