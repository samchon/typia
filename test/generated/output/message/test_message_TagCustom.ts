import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagCustom } from "../../../structures/TagCustom";

export const test_message_TagCustom = _test_message(
    "TagCustom",
    'syntax = "proto3";\n\nmessage TagCustom {\n    string id = 1;\n    string dollar = 2;\n    string postfix = 3;\n    double log = 4;\n}',
);
