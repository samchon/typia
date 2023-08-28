"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufDecodeTransformer = void 0;
const ProtobufDecodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufDecodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufDecodeTransformer;
(function (ProtobufDecodeTransformer) {
    ProtobufDecodeTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("protobuf.decode")((project) => (modulo) => ProtobufDecodeProgrammer_1.ProtobufDecodeProgrammer.write(project)(modulo));
})(ProtobufDecodeTransformer || (exports.ProtobufDecodeTransformer = ProtobufDecodeTransformer = {}));
