"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProtobufDecodeTransformer = void 0;
const ProtobufDecodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufDecodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateProtobufDecodeTransformer;
(function (CreateProtobufDecodeTransformer) {
    CreateProtobufDecodeTransformer.transform = GenericTransformer_1.GenericTransformer.factory("protobuf.createDecode")((project) => (modulo) => ProtobufDecodeProgrammer_1.ProtobufDecodeProgrammer.write(project)(modulo));
})(CreateProtobufDecodeTransformer || (exports.CreateProtobufDecodeTransformer = CreateProtobufDecodeTransformer = {}));
