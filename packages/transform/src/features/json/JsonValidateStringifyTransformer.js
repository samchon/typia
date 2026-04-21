"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonValidateStringifyTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonValidateStringifyTransformer;
(function (JsonValidateStringifyTransformer) {
    JsonValidateStringifyTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "json.validateStringify", write: core_1.JsonValidateStringifyProgrammer.write }));
})(JsonValidateStringifyTransformer || (exports.JsonValidateStringifyTransformer = JsonValidateStringifyTransformer = {}));
//# sourceMappingURL=JsonValidateStringifyTransformer.js.map