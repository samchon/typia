"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufValidateDecodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufValidateDecodeTransformer;
(function (ProtobufValidateDecodeTransformer) {
    ProtobufValidateDecodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "protobuf.validateDecode", write: core_1.ProtobufValidateDecodeProgrammer.write }));
})(ProtobufValidateDecodeTransformer || (exports.ProtobufValidateDecodeTransformer = ProtobufValidateDecodeTransformer = {}));
//# sourceMappingURL=ProtobufValidateDecodeTransformer.js.map