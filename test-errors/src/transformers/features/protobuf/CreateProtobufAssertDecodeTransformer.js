"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProtobufAssertDecodeTransformer = void 0;
const ProtobufAssertDecodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufAssertDecodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var CreateProtobufAssertDecodeTransformer;
(function (CreateProtobufAssertDecodeTransformer) {
    CreateProtobufAssertDecodeTransformer.transform = GenericTransformer_1.GenericTransformer.factory("protobuf.createAssertDecode")((project) => (modulo) => ProtobufAssertDecodeProgrammer_1.ProtobufAssertDecodeProgrammer.write(project)(modulo));
})(CreateProtobufAssertDecodeTransformer || (exports.CreateProtobufAssertDecodeTransformer = CreateProtobufAssertDecodeTransformer = {}));
