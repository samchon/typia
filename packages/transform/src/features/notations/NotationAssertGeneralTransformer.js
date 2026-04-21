"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationAssertGeneralTransformer = void 0;
const core_1 = require("@typia/core");
const utils_1 = require("@typia/utils");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var NotationAssertGeneralTransformer;
(function (NotationAssertGeneralTransformer) {
    NotationAssertGeneralTransformer.transform = (rename) => (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: `notations.assert${utils_1.NamingConvention.capitalize(rename.name)}`, write: (x) => core_1.NotationAssertGeneralProgrammer.write(Object.assign(Object.assign({}, x), { rename })) }));
})(NotationAssertGeneralTransformer || (exports.NotationAssertGeneralTransformer = NotationAssertGeneralTransformer = {}));
//# sourceMappingURL=NotationAssertGeneralTransformer.js.map