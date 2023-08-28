"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProtobufAssertEncodeTransformer = void 0;
const ProtobufAssertEncodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufAssertEncodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateProtobufAssertEncodeTransformer;
(function (CreateProtobufAssertEncodeTransformer) {
    CreateProtobufAssertEncodeTransformer.transform = GenericTransformer_1.GenericTransformer.factory("protobuf.createAssertEncode")((project) => (modulo) => ProtobufAssertEncodeProgrammer_1.ProtobufAssertEncodeProgrammer.write(project)(modulo));
})(CreateProtobufAssertEncodeTransformer || (exports.CreateProtobufAssertEncodeTransformer = CreateProtobufAssertEncodeTransformer = {}));
