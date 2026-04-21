"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufCreateAssertDecodeTransformer = void 0;
const core_1 = require("@typia/core");
const GenericTransformer_1 = require("../../internal/GenericTransformer");
var ProtobufCreateAssertDecodeTransformer;
(function (ProtobufCreateAssertDecodeTransformer) {
    ProtobufCreateAssertDecodeTransformer.transform = (props) => GenericTransformer_1.GenericTransformer.factory(Object.assign(Object.assign({}, props), { method: "protobuf.createAssertDecode", write: core_1.ProtobufAssertDecodeProgrammer.write }));
})(ProtobufCreateAssertDecodeTransformer || (exports.ProtobufCreateAssertDecodeTransformer = ProtobufCreateAssertDecodeTransformer = {}));
//# sourceMappingURL=ProtobufCreateAssertDecodeTransformer.js.map