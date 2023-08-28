"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProtobufIsEncodeTransformer = void 0;
const ProtobufIsEncodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufIsEncodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateProtobufIsEncodeTransformer;
(function (CreateProtobufIsEncodeTransformer) {
    CreateProtobufIsEncodeTransformer.transform = GenericTransformer_1.GenericTransformer.factory("protobuf.createIsEncode")((project) => (modulo) => ProtobufIsEncodeProgrammer_1.ProtobufIsEncodeProgrammer.write(project)(modulo));
})(CreateProtobufIsEncodeTransformer || (exports.CreateProtobufIsEncodeTransformer = CreateProtobufIsEncodeTransformer = {}));
