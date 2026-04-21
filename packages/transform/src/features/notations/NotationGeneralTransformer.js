"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationGeneralTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var NotationGeneralTransformer;
(function (NotationGeneralTransformer) {
    NotationGeneralTransformer.transform = (rename) => (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: `notations.${rename.name}`, write: (x) => core_1.NotationGeneralProgrammer.write(Object.assign(Object.assign({}, x), { rename })) }));
})(NotationGeneralTransformer || (exports.NotationGeneralTransformer = NotationGeneralTransformer = {}));
//# sourceMappingURL=NotationGeneralTransformer.js.map