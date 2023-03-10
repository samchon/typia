import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagPattern } from "../../../structures/TagPattern";

export const test_message_TagPattern = _test_message(
    "TagPattern",
    'syntax = "proto3";\n\nmessage TagPattern {\n    string uuid = 1;\n    string email = 2;\n    string ipv4 = 3;\n    string ipv6 = 4;\n}',
);
