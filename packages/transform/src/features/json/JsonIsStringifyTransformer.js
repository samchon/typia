"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIsStringifyTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonIsStringifyTransformer;
(function (JsonIsStringifyTransformer) {
    JsonIsStringifyTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "json.isStringify", write: core_1.JsonIsStringifyProgrammer.write }));
})(JsonIsStringifyTransformer || (exports.JsonIsStringifyTransformer = JsonIsStringifyTransformer = {}));
//# sourceMappingURL=JsonIsStringifyTransformer.js.map