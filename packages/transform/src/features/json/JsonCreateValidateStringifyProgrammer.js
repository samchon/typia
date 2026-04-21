"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateValidateStringifyTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateValidateStringifyTransformer;
(function (JsonCreateValidateStringifyTransformer) {
    JsonCreateValidateStringifyTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "json.createValidateStringify", write: core_1.JsonValidateStringifyProgrammer.write }));
})(JsonCreateValidateStringifyTransformer || (exports.JsonCreateValidateStringifyTransformer = JsonCreateValidateStringifyTransformer = {}));
//# sourceMappingURL=JsonCreateValidateStringifyProgrammer.js.map