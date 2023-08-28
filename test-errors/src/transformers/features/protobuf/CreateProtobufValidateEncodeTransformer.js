"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProtobufValidateEncodeTransformer = void 0;
const ProtobufValidateEncodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufValidateEncodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateProtobufValidateEncodeTransformer;
(function (CreateProtobufValidateEncodeTransformer) {
    CreateProtobufValidateEncodeTransformer.transform = GenericTransformer_1.GenericTransformer.factory("protobuf.createValidateEncode")((project) => (modulo) => ProtobufValidateEncodeProgrammer_1.ProtobufValidateEncodeProgrammer.write(project)(modulo));
})(CreateProtobufValidateEncodeTransformer || (exports.CreateProtobufValidateEncodeTransformer = CreateProtobufValidateEncodeTransformer = {}));
