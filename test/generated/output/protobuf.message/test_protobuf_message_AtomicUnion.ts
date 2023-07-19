import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_protobuf_message_AtomicUnion = _test_protobuf_message(
    "AtomicUnion",
)(
    'syntax = "proto3";\n\nmessage __Main {\n    repeated Array.Element_lt__lp_boolean_space__or__space_null_space__or__space_number_space__or__space_string_rp__gt_ value = 1;\n}\n\nmessage Array {\n    message Element_lt__lp_boolean_space__or__space_null_space__or__space_number_space__or__space_string_rp__gt_ {\n        oneof value {\n            string value_o0 = 1;\n            double value_o1 = 2;\n            bool value_o2 = 3;\n        }\n    }\n}',
);
