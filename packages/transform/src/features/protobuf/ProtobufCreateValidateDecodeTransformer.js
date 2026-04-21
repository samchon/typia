"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufCreateValidateDecodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufCreateValidateDecodeTransformer;
(function (ProtobufCreateValidateDecodeTransformer) {
    ProtobufCreateValidateDecodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "protobuf.createValidateDecode", write: core_1.ProtobufValidateDecodeProgrammer.write }));
})(ProtobufCreateValidateDecodeTransformer || (exports.ProtobufCreateValidateDecodeTransformer = ProtobufCreateValidateDecodeTransformer = {}));
//# sourceMappingURL=ProtobufCreateValidateDecodeTransformer.js.map