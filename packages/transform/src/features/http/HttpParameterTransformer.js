"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpParameterTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var HttpParameterTransformer;
(function (HttpParameterTransformer) {
    HttpParameterTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "http.parameter", write: core_1.HttpParameterProgrammer.write }));
})(HttpParameterTransformer || (exports.HttpParameterTransformer = HttpParameterTransformer = {}));
//# sourceMappingURL=HttpParameterTransformer.js.map