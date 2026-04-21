"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAssertParseTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonAssertParseTransformer;
(function (JsonAssertParseTransformer) {
    JsonAssertParseTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "json.assertParse", write: core_1.JsonAssertParseProgrammer.write }));
})(JsonAssertParseTransformer || (exports.JsonAssertParseTransformer = JsonAssertParseTransformer = {}));
//# sourceMappingURL=JsonAssertParseTransformer.js.map