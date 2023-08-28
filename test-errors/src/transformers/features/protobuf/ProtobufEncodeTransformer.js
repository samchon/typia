"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufEncodeTransformer = void 0;
const ProtobufEncodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufEncodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufEncodeTransformer;
(function (ProtobufEncodeTransformer) {
    ProtobufEncodeTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("protobuf.encode")((project) => (modulo) => ProtobufEncodeProgrammer_1.ProtobufEncodeProgrammer.write(project)(modulo));
})(ProtobufEncodeTransformer || (exports.ProtobufEncodeTransformer = ProtobufEncodeTransformer = {}));
