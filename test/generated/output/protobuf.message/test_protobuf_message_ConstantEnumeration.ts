import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_protobuf_message_ConstantEnumeration = _test_protobuf_message(
    "ConstantEnumeration",
)(
    'syntax = "proto3";\n\nmessage __Main {\n    repeated Array.Element_lt__lp__doublequote_Four_doublequote__space__or__space__doublequote_Three_doublequote__space__or__space_0_space__or__space_1_space__or__space_2_rp__gt_ value = 1;\n}\n\nmessage Array {\n    message Element_lt__lp__doublequote_Four_doublequote__space__or__space__doublequote_Three_doublequote__space__or__space_0_space__or__space_1_space__or__space_2_rp__gt_ {\n        oneof value {\n            uint32 value_o0 = 1;\n            string value_o1 = 2;\n        }\n    }\n}',
);
