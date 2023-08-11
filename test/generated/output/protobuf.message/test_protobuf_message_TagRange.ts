import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagRange } from "../../../structures/TagRange";

export const test_protobuf_message_TagRange = _test_protobuf_message(
    "TagRange",
)(
    'syntax = "proto3";\n\nmessage TagRange {\n    repeated TagRange.Type value = 1;\n    message Type {\n        required double greater = 1;\n        required double greater_equal = 2;\n        required double less = 3;\n        required double less_equal = 4;\n        required double greater_less = 5;\n        required double greater_equal_less = 6;\n        required double greater_less_equal = 7;\n        required double greater_equal_less_equal = 8;\n    }\n}',
);
