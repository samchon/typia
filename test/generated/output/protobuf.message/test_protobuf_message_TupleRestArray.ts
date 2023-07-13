import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_protobuf_message_TupleRestArray = _test_protobuf_message(
    "TupleRestArray",
    'syntax = "proto3";\n\nmessage __Main {\n    _alt_boolean_comma__space_number_comma__space_...Array_lt_string_gt__agt_ value = 1;\n}\n\nmessage _alt_boolean_comma__space_number_comma__space_ {\n    message  {\n        message  {\n            message Array_lt_string_gt__agt_ {\n                bool v0 = 1;\n                double v1 = 2;\n                repeated Array.Element_lt_Array_lt_string_gt__gt_ v2 = 3;\n            }\n        }\n    }\n}\n\nmessage Array {\n    message Element_lt_Array_lt_string_gt__gt_ {\n        repeated string value = 1;\n    }\n}',
);
