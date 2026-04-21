"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateIsStringifyTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateIsStringifyTransformer;
(function (JsonCreateIsStringifyTransformer) {
    JsonCreateIsStringifyTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "json.stringify", write: core_1.JsonIsStringifyProgrammer.write }));
})(JsonCreateIsStringifyTransformer || (exports.JsonCreateIsStringifyTransformer = JsonCreateIsStringifyTransformer = {}));
//# sourceMappingURL=JsonCreateIsStringifyTransformer.js.map