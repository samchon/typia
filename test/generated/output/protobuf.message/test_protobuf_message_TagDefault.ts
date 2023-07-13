import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagDefault } from "../../../structures/TagDefault";

export const test_protobuf_message_TagDefault = _test_protobuf_message(
    "TagDefault",
    'syntax = "proto3";\n\nmessage TagDefault {\n    bool boolean = 1;\n    double number = 2;\n    string string = 3;\n    string text = 4;\n    string template = 5;\n    oneof boolean_and_number_and_string {\n        string boolean_and_number_and_string_o0 = 6;\n        double boolean_and_number_and_string_o1 = 7;\n        bool boolean_and_number_and_string_o2 = 8;\n    }\n    oneof union_but_boolean {\n        string union_but_boolean_o0 = 9;\n        double union_but_boolean_o1 = 10;\n        bool union_but_boolean_o2 = 11;\n    }\n    oneof union_but_number {\n        string union_but_number_o0 = 12;\n        double union_but_number_o1 = 13;\n        bool union_but_number_o2 = 14;\n    }\n    oneof union_but_string {\n        string union_but_string_o0 = 15;\n        double union_but_string_o1 = 16;\n        bool union_but_string_o2 = 17;\n    }\n    double vulnerable_range = 18;\n    string vulnerable_template = 19;\n    oneof boolean_and_number_and_template {\n        double boolean_and_number_and_template_o0 = 20;\n        bool boolean_and_number_and_template_o1 = 21;\n        string boolean_and_number_and_template_o2 = 22;\n    }\n}',
);
