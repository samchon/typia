"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreateIsParseTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var JsonCreateIsParseTransformer;
(function (JsonCreateIsParseTransformer) {
    JsonCreateIsParseTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "json.createIsParse", write: core_1.JsonIsParseProgrammer.write }));
})(JsonCreateIsParseTransformer || (exports.JsonCreateIsParseTransformer = JsonCreateIsParseTransformer = {}));
//# sourceMappingURL=JsonCreateIsParseTransformer.js.map