"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufIsEncodeTransformer = void 0;
const ProtobufIsEncodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufIsEncodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufIsEncodeTransformer;
(function (ProtobufIsEncodeTransformer) {
    ProtobufIsEncodeTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("protobuf.isEncode")((project) => (modulo) => ProtobufIsEncodeProgrammer_1.ProtobufIsEncodeProgrammer.write(project)(modulo));
})(ProtobufIsEncodeTransformer || (exports.ProtobufIsEncodeTransformer = ProtobufIsEncodeTransformer = {}));
