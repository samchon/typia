import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagRange } from "../../../structures/TagRange";

export const test_protobuf_message_TagRange = _test_protobuf_message(
    "TagRange",
)(
    'syntax = "proto3";\n\nmessage TagRange {\n    repeated TagRange.Type value = 1;\n    message Type {\n        requireddouble greater = 1;\n        requireddouble greater_equal = 2;\n        requireddouble less = 3;\n        requireddouble less_equal = 4;\n        requireddouble greater_less = 5;\n        requireddouble greater_equal_less = 6;\n        requireddouble greater_less_equal = 7;\n        requireddouble greater_equal_less_equal = 8;\n    }\n}',
);
