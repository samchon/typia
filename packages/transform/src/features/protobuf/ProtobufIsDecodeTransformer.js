"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufIsDecodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufIsDecodeTransformer;
(function (ProtobufIsDecodeTransformer) {
    ProtobufIsDecodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "protobuf.isDecode", write: core_1.ProtobufIsDecodeProgrammer.write }));
})(ProtobufIsDecodeTransformer || (exports.ProtobufIsDecodeTransformer = ProtobufIsDecodeTransformer = {}));
//# sourceMappingURL=ProtobufIsDecodeTransformer.js.map