"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationCreateIsGeneralTransformer = void 0;
const core_1 = require("@typia/core");
const utils_1 = require("@typia/utils");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var NotationCreateIsGeneralTransformer;
(function (NotationCreateIsGeneralTransformer) {
    NotationCreateIsGeneralTransformer.transform = (rename) => (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: `notations.createIs${utils_1.NamingConvention.capitalize(rename.name)}`, write: (x) => core_1.NotationIsGeneralProgrammer.write(Object.assign(Object.assign({}, x), { rename })) }));
})(NotationCreateIsGeneralTransformer || (exports.NotationCreateIsGeneralTransformer = NotationCreateIsGeneralTransformer = {}));
//# sourceMappingURL=NotationCreateIsGeneralTransformer.js.map