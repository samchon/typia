import typia from "typia";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ArrayRecursive = _test_protobuf_message(
  "ArrayRecursive",
)(
  'syntax = "proto3";\n\nmessage ArrayRecursive {\n  message ICategory {\n    repeated ArrayRecursive.ICategory children = 1;\n    required double id = 2;\n    required string code = 3;\n    required double sequence = 4;\n    required ArrayRecursive.ITimestamp created_at = 5;\n  }\n\n  message ITimestamp {\n    required double time = 1;\n    required double zone = 2;\n  }\n}',
);
