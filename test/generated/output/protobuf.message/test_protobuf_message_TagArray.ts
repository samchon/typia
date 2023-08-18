import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagArray } from "../../../structures/TagArray";

export const test_protobuf_message_TagArray = _test_protobuf_message(
    "TagArray",
)(
    'syntax = "proto3";\n\nmessage TagArray {\n    repeated TagArray.Type value = 1;\n    message Type {\n        repeated string items = 1;\n        repeated double minItems = 2;\n        repeated string both = 3;\n        repeated double equal = 4;\n    }\n}',
);
