"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProtobufValidateDecodeTransformer = void 0;
const ProtobufValidateDecodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufValidateDecodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateProtobufValidateDecodeTransformer;
(function (CreateProtobufValidateDecodeTransformer) {
    CreateProtobufValidateDecodeTransformer.transform = GenericTransformer_1.GenericTransformer.factory("protobuf.createValidateDecode")((project) => (modulo) => ProtobufValidateDecodeProgrammer_1.ProtobufValidateDecodeProgrammer.write(project)(modulo));
})(CreateProtobufValidateDecodeTransformer || (exports.CreateProtobufValidateDecodeTransformer = CreateProtobufValidateDecodeTransformer = {}));
