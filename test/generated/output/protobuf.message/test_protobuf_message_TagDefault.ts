import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagDefault } from "../../../structures/TagDefault";

export const test_protobuf_message_TagDefault = _test_protobuf_message(
    "TagDefault",
)(
    'syntax = "proto3";\n\nmessage TagDefault {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    required string text = 4;\n    required string template = 5;\n    oneof boolean_and_number_and_string {\n        string v6 = 6;\n        double v7 = 7;\n        bool v8 = 8;\n    }\n    oneof union_but_boolean {\n        string v9 = 9;\n        double v10 = 10;\n        bool v11 = 11;\n    }\n    oneof union_but_number {\n        string v12 = 12;\n        double v13 = 13;\n        bool v14 = 14;\n    }\n    oneof union_but_string {\n        string v15 = 15;\n        double v16 = 16;\n        bool v17 = 17;\n    }\n    required double vulnerable_range = 18;\n    required string vulnerable_template = 19;\n    oneof boolean_and_number_and_template {\n        string v20 = 20;\n        double v21 = 21;\n        bool v22 = 22;\n    }\n}',
);
