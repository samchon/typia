"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIsParseTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonIsParseTransformer;
(function (JsonIsParseTransformer) {
    JsonIsParseTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "json.isParse", write: core_1.JsonIsParseProgrammer.write }));
})(JsonIsParseTransformer || (exports.JsonIsParseTransformer = JsonIsParseTransformer = {}));
//# sourceMappingURL=JsonIsParseTransformer.js.map