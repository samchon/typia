"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufAssertDecodeTransformer = void 0;
const ProtobufAssertDecodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufAssertDecodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufAssertDecodeTransformer;
(function (ProtobufAssertDecodeTransformer) {
    ProtobufAssertDecodeTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("protobuf.assertDecode")((project) => (modulo) => ProtobufAssertDecodeProgrammer_1.ProtobufAssertDecodeProgrammer.write(project)(modulo));
})(ProtobufAssertDecodeTransformer || (exports.ProtobufAssertDecodeTransformer = ProtobufAssertDecodeTransformer = {}));
