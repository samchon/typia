"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProtobufEncodeTransformer = void 0;
const ProtobufEncodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufEncodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateProtobufEncodeTransformer;
(function (CreateProtobufEncodeTransformer) {
    CreateProtobufEncodeTransformer.transform = GenericTransformer_1.GenericTransformer.factory("protobuf.createEncode")((project) => (modulo) => ProtobufEncodeProgrammer_1.ProtobufEncodeProgrammer.write(project)(modulo));
})(CreateProtobufEncodeTransformer || (exports.CreateProtobufEncodeTransformer = CreateProtobufEncodeTransformer = {}));
