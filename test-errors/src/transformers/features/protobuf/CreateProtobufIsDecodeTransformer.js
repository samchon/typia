"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProtobufIsDecodeTransformer = void 0;
const ProtobufIsDecodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufIsDecodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateProtobufIsDecodeTransformer;
(function (CreateProtobufIsDecodeTransformer) {
    CreateProtobufIsDecodeTransformer.transform = GenericTransformer_1.GenericTransformer.factory("protobuf.createIsDecode")((project) => (modulo) => ProtobufIsDecodeProgrammer_1.ProtobufIsDecodeProgrammer.write(project)(modulo));
})(CreateProtobufIsDecodeTransformer || (exports.CreateProtobufIsDecodeTransformer = CreateProtobufIsDecodeTransformer = {}));
