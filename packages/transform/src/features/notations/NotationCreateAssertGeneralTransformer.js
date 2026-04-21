"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationCreateAssertGeneralTransformer = void 0;
const core_1 = require("@typia/core");
const utils_1 = require("@typia/utils");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var NotationCreateAssertGeneralTransformer;
(function (NotationCreateAssertGeneralTransformer) {
    NotationCreateAssertGeneralTransformer.transform = (rename) => (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: `notations.createAssert${utils_1.NamingConvention.capitalize(rename.name)}`, write: (x) => core_1.NotationAssertGeneralProgrammer.write(Object.assign(Object.assign({}, x), { rename })) }));
})(NotationCreateAssertGeneralTransformer || (exports.NotationCreateAssertGeneralTransformer = NotationCreateAssertGeneralTransformer = {}));
//# sourceMappingURL=NotationCreateAssertGeneralTransformer.js.map