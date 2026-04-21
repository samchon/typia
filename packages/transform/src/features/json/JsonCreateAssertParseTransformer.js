"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateAssertParseTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateAssertParseTransformer;
(function (JsonCreateAssertParseTransformer) {
    JsonCreateAssertParseTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "json.createAssertParse", write: core_1.JsonAssertParseProgrammer.write }));
})(JsonCreateAssertParseTransformer || (exports.JsonCreateAssertParseTransformer = JsonCreateAssertParseTransformer = {}));
//# sourceMappingURL=JsonCreateAssertParseTransformer.js.map