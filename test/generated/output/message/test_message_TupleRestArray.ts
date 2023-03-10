import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_message_TupleRestArray = _test_message(
    "TupleRestArray",
    'syntax = "proto3";\n\nmessage __Main {\n    _alt_boolean_comma__space_number_comma__space_Rest_lt_Array_lt_string_gt__gt__agt_ value = 1;\n}\n\nmessage _alt_boolean_comma__space_number_comma__space_Rest_lt_Array_lt_string_gt__gt__agt_ {\n    bool v0 = 1;\n    double v1 = 2;\n    repeated Array.Element_lt_Array_lt_string_gt__gt_ v2 = 3;\n}\n\nmessage Array {\n    message Element_lt_Array_lt_string_gt__gt_ {\n        repeated string value = 1;\n    }\n}',
);
