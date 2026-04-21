"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateStringifyTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateStringifyTransformer;
(function (JsonCreateStringifyTransformer) {
    JsonCreateStringifyTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "json.createStringify", write: core_1.JsonStringifyProgrammer.write }));
})(JsonCreateStringifyTransformer || (exports.JsonCreateStringifyTransformer = JsonCreateStringifyTransformer = {}));
//# sourceMappingURL=JsonCreateStringifyTransformer.js.map