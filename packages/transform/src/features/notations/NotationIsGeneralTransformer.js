"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationIsGeneralTransformer = void 0;
const core_1 = require("@typia/core");
const utils_1 = require("@typia/utils");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var NotationIsGeneralTransformer;
(function (NotationIsGeneralTransformer) {
    NotationIsGeneralTransformer.transform = (rename) => (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: `notations.is${utils_1.NamingConvention.capitalize(rename.name)}`, write: (x) => core_1.NotationIsGeneralProgrammer.write(Object.assign(Object.assign({}, x), { rename })) }));
})(NotationIsGeneralTransformer || (exports.NotationIsGeneralTransformer = NotationIsGeneralTransformer = {}));
//# sourceMappingURL=NotationIsGeneralTransformer.js.map