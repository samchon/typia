import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_protobuf_message_TypeTagDefault = _test_protobuf_message(
  "TypeTagDefault",
)(
  'syntax = "proto3";\n\nmessage TypeTagDefault {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    required string text = 4;\n    oneof boolean_and_number_and_string {\n        bool v5 = 5;\n        double v6 = 6;\n        string v7 = 7;\n    }\n    oneof union_but_boolean {\n        bool v8 = 8;\n        double v9 = 9;\n        string v10 = 10;\n    }\n    oneof union_but_number {\n        bool v11 = 11;\n        double v12 = 12;\n        string v13 = 13;\n    }\n    oneof union_but_string {\n        bool v14 = 14;\n        double v15 = 15;\n        string v16 = 16;\n    }\n    oneof boolean_and_number_and_template {\n        bool v17 = 17;\n        double v18 = 18;\n        string v19 = 19;\n    }\n}',
);
