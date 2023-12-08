import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_protobuf_message_CommentTagDefault = _test_protobuf_message(
  "CommentTagDefault",
)(
  'syntax = "proto3";\n\nmessage CommentTagDefault {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    required string text = 4;\n    oneof boolean_and_number_and_string {\n        bool v5 = 5;\n        double v6 = 6;\n        string v7 = 7;\n    }\n    oneof union_but_boolean {\n        bool v8 = 8;\n        double v9 = 9;\n        string v10 = 10;\n    }\n    oneof union_but_number {\n        bool v11 = 11;\n        double v12 = 12;\n        string v13 = 13;\n    }\n    oneof union_but_string {\n        bool v14 = 14;\n        double v15 = 15;\n        string v16 = 16;\n    }\n    required double vulnerable_range = 17;\n    oneof boolean_and_number_and_template {\n        bool v18 = 18;\n        double v19 = 19;\n        string v20 = 20;\n    }\n}',
);
