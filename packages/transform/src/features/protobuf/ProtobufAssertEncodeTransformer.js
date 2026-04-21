"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufAssertEncodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufAssertEncodeTransformer;
(function (ProtobufAssertEncodeTransformer) {
    ProtobufAssertEncodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.scalar(Object.assign(Object.assign({}, props), { method: "protobuf.assertEncode", write: core_1.ProtobufAssertEncodeProgrammer.write }));
})(ProtobufAssertEncodeTransformer || (exports.ProtobufAssertEncodeTransformer = ProtobufAssertEncodeTransformer = {}));
//# sourceMappingURL=ProtobufAssertEncodeTransformer.js.map