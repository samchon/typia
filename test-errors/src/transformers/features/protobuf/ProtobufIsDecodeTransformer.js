"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufIsDecodeTransformer = void 0;
const ProtobufIsDecodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufIsDecodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufIsDecodeTransformer;
(function (ProtobufIsDecodeTransformer) {
    ProtobufIsDecodeTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("protobuf.isDecode")((project) => (modulo) => ProtobufIsDecodeProgrammer_1.ProtobufIsDecodeProgrammer.write(project)(modulo));
})(ProtobufIsDecodeTransformer || (exports.ProtobufIsDecodeTransformer = ProtobufIsDecodeTransformer = {}));
