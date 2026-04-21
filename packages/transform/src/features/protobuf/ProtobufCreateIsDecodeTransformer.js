"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufCreateIsDecodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufCreateIsDecodeTransformer;
(function (ProtobufCreateIsDecodeTransformer) {
    ProtobufCreateIsDecodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "protobuf.createIsDecode", write: core_1.ProtobufIsDecodeProgrammer.write }));
})(ProtobufCreateIsDecodeTransformer || (exports.ProtobufCreateIsDecodeTransformer = ProtobufCreateIsDecodeTransformer = {}));
//# sourceMappingURL=ProtobufCreateIsDecodeTransformer.js.map