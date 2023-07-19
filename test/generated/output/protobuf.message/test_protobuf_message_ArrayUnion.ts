import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_protobuf_message_ArrayUnion = _test_protobuf_message(
    "ArrayUnion",
)(
    'syntax = "proto3";\n\nmessage __Main {\n    repeated Array.Element_lt__lp_Array_lt_boolean_gt__space__or__space_Array_lt_number_gt__space__or__space_Array_lt_string_gt__rp__gt_ value = 1;\n}\n\nmessage Array {\n    message Element_lt__lp_Array_lt_boolean_gt__space__or__space_Array_lt_number_gt__space__or__space_Array_lt_string_gt__rp__gt_ {\n        oneof value {\n            Array.Wrapper_lt_boolean_gt_ value_o0 = 1;\n            Array.Wrapper_lt_number_gt_ value_o1 = 2;\n            Array.Wrapper_lt_string_gt_ value_o2 = 3;\n        }\n    }\n\n    message Wrapper_lt_boolean_gt_ {\n        repeated bool value = 1;\n    }\n\n    message Wrapper_lt_number_gt_ {\n        repeated double value = 1;\n    }\n\n    message Wrapper_lt_string_gt_ {\n        repeated string value = 1;\n    }\n}',
);
