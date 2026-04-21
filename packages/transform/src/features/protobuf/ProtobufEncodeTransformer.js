"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufEncodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufEncodeTransformer;
(function (ProtobufEncodeTransformer) {
    ProtobufEncodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "protobuf.encode", write: core_1.ProtobufEncodeProgrammer.write }));
})(ProtobufEncodeTransformer || (exports.ProtobufEncodeTransformer = ProtobufEncodeTransformer = {}));
//# sourceMappingURL=ProtobufEncodeTransformer.js.map