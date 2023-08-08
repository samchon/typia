import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_protobuf_message_ArrayAtomicAlias = _test_protobuf_message(
    "ArrayAtomicAlias",
    'syntax = "proto3";\n\nmessage __Main {\n    _alt_ArrayAtomicAlias.Alias_lt_boolean_gt__comma__space_ArrayAtomicAlias.Alias_lt_number_gt__comma__space_ArrayAtomicAlias.Alias_lt_string_gt__agt_ value = 1;\n}\n\nmessage _alt_ArrayAtomicAlias {\n    message Alias_lt_boolean_gt__comma__space_ArrayAtomicAlias {\n        message Alias_lt_number_gt__comma__space_ArrayAtomicAlias {\n            message Alias_lt_string_gt__agt_ {\n                repeated bool v0 = 1;\n                repeated double v1 = 2;\n                repeated string v2 = 3;\n            }\n        }\n    }\n}',
);
