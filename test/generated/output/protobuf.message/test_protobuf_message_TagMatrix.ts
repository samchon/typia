import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_protobuf_message_TagMatrix = _test_protobuf_message(
    "TagMatrix",
)(
    'syntax = "proto3";\n\nmessage TagMatrix {\n    repeated Array.Element_lt_Array_lt_string_gt__gt_ matrix = 1;\n}\n\nmessage Array {\n    message Element_lt_Array_lt_string_gt__gt_ {\n        repeated string value = 1;\n    }\n}',
);
