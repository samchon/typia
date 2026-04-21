"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufCreateDecodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufCreateDecodeTransformer;
(function (ProtobufCreateDecodeTransformer) {
    ProtobufCreateDecodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "protobuf.createDecode", write: core_1.ProtobufDecodeProgrammer.write }));
})(ProtobufCreateDecodeTransformer || (exports.ProtobufCreateDecodeTransformer = ProtobufCreateDecodeTransformer = {}));
//# sourceMappingURL=ProtobufCreateDecodeTransformer.js.map