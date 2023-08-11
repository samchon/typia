import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagDefault } from "../../../structures/TagDefault";

export const test_protobuf_message_TagDefault = _test_protobuf_message(
    "TagDefault",
)(
    'syntax = "proto3";\n\nmessage TagDefault {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    required string text = 4;\n    required string template = 5;\n    oneof boolean_and_number_and_string {\n        string v1 = 6;\n        double v2 = 7;\n        bool v3 = 8;\n    }\n    oneof union_but_boolean {\n        string v1 = 9;\n        double v2 = 10;\n        bool v3 = 11;\n    }\n    oneof union_but_number {\n        string v1 = 12;\n        double v2 = 13;\n        bool v3 = 14;\n    }\n    oneof union_but_string {\n        string v1 = 15;\n        double v2 = 16;\n        bool v3 = 17;\n    }\n    required double vulnerable_range = 18;\n    required string vulnerable_template = 19;\n    oneof boolean_and_number_and_template {\n        string v1 = 20;\n        double v2 = 21;\n        bool v3 = 22;\n    }\n}',
);
