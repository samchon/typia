import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_message_TagMatrix = _test_message(
    "TagMatrix",
    'syntax = "proto3";\n\nmessage TagMatrix {\n    repeated Array.Element_lt_Array_lt_string_gt__gt_ matrix = 1;\n}\n\nmessage Array {\n    message Element_lt_Array_lt_string_gt__gt_ {\n        repeated string value = 1;\n    }\n}',
);
