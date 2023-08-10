import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_protobuf_message_TagAtomicUnion = _test_protobuf_message(
    "TagAtomicUnion",
)(
    'syntax = "proto3";\n\nmessage TagAtomicUnion {\n    repeated TagAtomicUnion.Type value = 1;\n    message Type {\n        oneof value {\n            string v1 = 1;\n            double v2 = 2;\n        }\n    }\n}',
);
