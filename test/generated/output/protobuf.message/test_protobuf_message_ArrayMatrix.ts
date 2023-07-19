import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_protobuf_message_ArrayMatrix = _test_protobuf_message(
    "ArrayMatrix",
)(
    'syntax = "proto3";\n\nmessage __Main {\n    repeated Array.Element_lt_Array_lt_Array_lt_number_gt__gt__gt_ value = 1;\n}\n\nmessage Array {\n    message Element_lt_Array_lt_Array_lt_number_gt__gt__gt_ {\n        repeated Array.Element_lt_Array_lt_number_gt__gt_ value = 1;\n    }\n\n    message Element_lt_Array_lt_number_gt__gt_ {\n        repeated double value = 1;\n    }\n}',
);
