"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufIsEncodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufIsEncodeTransformer;
(function (ProtobufIsEncodeTransformer) {
    ProtobufIsEncodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "protobuf.isEncode", write: core_1.ProtobufIsEncodeProgrammer.write }));
})(ProtobufIsEncodeTransformer || (exports.ProtobufIsEncodeTransformer = ProtobufIsEncodeTransformer = {}));
//# sourceMappingURL=ProtobufIsEncodeTransformer.js.map