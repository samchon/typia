"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufValidateEncodeTransformer = void 0;
const ProtobufValidateEncodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufValidateEncodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufValidateEncodeTransformer;
(function (ProtobufValidateEncodeTransformer) {
    ProtobufValidateEncodeTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("protobuf.validateEncode")((project) => (modulo) => ProtobufValidateEncodeProgrammer_1.ProtobufValidateEncodeProgrammer.write(project)(modulo));
})(ProtobufValidateEncodeTransformer || (exports.ProtobufValidateEncodeTransformer = ProtobufValidateEncodeTransformer = {}));
