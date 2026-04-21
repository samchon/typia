"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufCreateEncodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufCreateEncodeTransformer;
(function (ProtobufCreateEncodeTransformer) {
    ProtobufCreateEncodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "protobuf.createEncode", write: core_1.ProtobufEncodeProgrammer.write }));
})(ProtobufCreateEncodeTransformer || (exports.ProtobufCreateEncodeTransformer = ProtobufCreateEncodeTransformer = {}));
//# sourceMappingURL=ProtobufCreateEncodeTransformer.js.map