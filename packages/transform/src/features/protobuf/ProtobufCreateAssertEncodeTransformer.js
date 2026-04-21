"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufCreateAssertEncodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufCreateAssertEncodeTransformer;
(function (ProtobufCreateAssertEncodeTransformer) {
    ProtobufCreateAssertEncodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "protobuf.createAssertEncode", write: core_1.ProtobufAssertEncodeProgrammer.write }));
})(ProtobufCreateAssertEncodeTransformer || (exports.ProtobufCreateAssertEncodeTransformer = ProtobufCreateAssertEncodeTransformer = {}));
//# sourceMappingURL=ProtobufCreateAssertEncodeTransformer.js.map