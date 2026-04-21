"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationCreateValidateGeneralTransformer = void 0;
const core_1 = require("@typia/core");
const utils_1 = require("@typia/utils");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var NotationCreateValidateGeneralTransformer;
(function (NotationCreateValidateGeneralTransformer) {
    NotationCreateValidateGeneralTransformer.transform = (rename) => (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: `notations.createValidate${utils_1.NamingConvention.capitalize(rename.name)}`, write: (x) => core_1.NotationValidateGeneralProgrammer.write(Object.assign(Object.assign({}, x), { rename })) }));
})(NotationCreateValidateGeneralTransformer || (exports.NotationCreateValidateGeneralTransformer = NotationCreateValidateGeneralTransformer = {}));
//# sourceMappingURL=NotationCreateValidateGeneralTransformer.js.map