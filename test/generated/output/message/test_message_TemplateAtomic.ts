import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_message_TemplateAtomic = _test_message(
    "TemplateAtomic",
    'syntax = "proto3";\n\nmessage TemplateAtomic {\n    string prefix = 1;\n    string postfix = 2;\n    string middle_string = 3;\n    string middle_string_empty = 4;\n    string middle_numeric = 5;\n    string middle_boolean = 6;\n    string ipv4 = 7;\n    string email = 8;\n}',
);
