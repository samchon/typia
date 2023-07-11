import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_message_ArrayRepeatedNullable = _test_message(
    "ArrayRepeatedNullable",
    'syntax = "proto3";\n\nmessage __Main {\n    oneof value {\n        string value_o0 = 1;\n        double value_o1 = 2;\n        Array.Wrapper_lt__lp_Array_lt_ArrayRepeatedNullable_gt__space__or__space_null_space__or__space_number_space__or__space_string_rp__gt_ value_o2 = 3;\n    }\n}\n\nmessage Array {\n    message Wrapper_lt__lp_Array_lt_ArrayRepeatedNullable_gt__space__or__space_null_space__or__space_number_space__or__space_string_rp__gt_ {\n        repeated Array.Element_lt__lp_Array_lt_ArrayRepeatedNullable_gt__space__or__space_null_space__or__space_number_space__or__space_string_rp__gt_ value = 1;\n    }\n\n    message Element_lt__lp_Array_lt_ArrayRepeatedNullable_gt__space__or__space_null_space__or__space_number_space__or__space_string_rp__gt_ {\n        oneof value {\n            string value_o0 = 1;\n            double value_o1 = 2;\n            Array.Wrapper_lt__lp_Array_lt_ArrayRepeatedNullable_gt__space__or__space_null_space__or__space_number_space__or__space_string_rp__gt_ value_o2 = 3;\n        }\n    }\n}',
);
