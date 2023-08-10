import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_protobuf_message_ArrayRecursive = _test_protobuf_message(
    "ArrayRecursive",
)(
    'syntax = "proto3";\n\nmessage ArrayRecursive {\n    message ICategory {\n        repeated ArrayRecursive.ICategory children = 1;\n        requireddouble id = 2;\n        requiredstring code = 3;\n        requireddouble sequence = 4;\n        requiredArrayRecursive.ITimestamp created_at = 5;\n    }\n\n    message ITimestamp {\n        requireddouble time = 1;\n        requireddouble zone = 2;\n    }\n}',
);
