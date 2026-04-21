"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationCreateGeneralTransformer = void 0;
const core_1 = require("@typia/core");
const utils_1 = require("@typia/utils");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var NotationCreateGeneralTransformer;
(function (NotationCreateGeneralTransformer) {
    NotationCreateGeneralTransformer.transform = (rename) => (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: `notations.create${utils_1.NamingConvention.capitalize(rename.name)}`, write: (x) => core_1.NotationGeneralProgrammer.write(Object.assign(Object.assign({}, x), { rename })) }));
})(NotationCreateGeneralTransformer || (exports.NotationCreateGeneralTransformer = NotationCreateGeneralTransformer = {}));
//# sourceMappingURL=NotationCreateGeneralTransformer.js.map