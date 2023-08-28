"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufValidateDecodeTransformer = void 0;
const ProtobufValidateDecodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufValidateDecodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufValidateDecodeTransformer;
(function (ProtobufValidateDecodeTransformer) {
    ProtobufValidateDecodeTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("protobuf.validateDecode")((project) => (modulo) => ProtobufValidateDecodeProgrammer_1.ProtobufValidateDecodeProgrammer.write(project)(modulo));
})(ProtobufValidateDecodeTransformer || (exports.ProtobufValidateDecodeTransformer = ProtobufValidateDecodeTransformer = {}));
