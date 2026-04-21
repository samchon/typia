"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationValidateGeneralTransformer = void 0;
const core_1 = require("@typia/core");
const utils_1 = require("@typia/utils");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var NotationValidateGeneralTransformer;
(function (NotationValidateGeneralTransformer) {
    NotationValidateGeneralTransformer.transform = (rename) => (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: `notations.validate${utils_1.NamingConvention.capitalize(rename.name)}`, write: (x) => core_1.NotationValidateGeneralProgrammer.write(Object.assign(Object.assign({}, x), { rename })) }));
})(NotationValidateGeneralTransformer || (exports.NotationValidateGeneralTransformer = NotationValidateGeneralTransformer = {}));
//# sourceMappingURL=NotationValidateGeneralTransformer.js.map