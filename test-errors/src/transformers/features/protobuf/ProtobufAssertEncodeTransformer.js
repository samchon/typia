"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufAssertEncodeTransformer = void 0;
const ProtobufAssertEncodeProgrammer_1 = require("../../../programmers/protobuf/ProtobufAssertEncodeProgrammer");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufAssertEncodeTransformer;
(function (ProtobufAssertEncodeTransformer) {
    ProtobufAssertEncodeTransformer.transform = GenericTransformer_1.GenericTransformer.scalar("protobuf.assertEncode")((project) => (modulo) => ProtobufAssertEncodeProgrammer_1.ProtobufAssertEncodeProgrammer.write(project)(modulo));
})(ProtobufAssertEncodeTransformer || (exports.ProtobufAssertEncodeTransformer = ProtobufAssertEncodeTransformer = {}));
