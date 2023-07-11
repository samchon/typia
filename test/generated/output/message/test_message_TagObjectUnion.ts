import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_message_TagObjectUnion = _test_message(
    "TagObjectUnion",
    'syntax = "proto3";\n\nmessage TagObjectUnion {\n    message Numeric {\n        double value = 1;\n    }\n\n    message Literal {\n        string value = 1;\n    }\n}\n\nmessage __Main {\n    repeated Array.Element_lt__lp_TagObjectUnion.Literal_space__or__space_TagObjectUnion.Numeric_rp__gt_ value = 1;\n}\n\nmessage Array {\n    message Element_lt__lp_TagObjectUnion {\n        message Literal_space__or__space_TagObjectUnion {\n            message Numeric_rp__gt_ {\n                oneof value {\n                    TagObjectUnion.Literal value_o0 = 1;\n                    TagObjectUnion.Numeric value_o1 = 2;\n                }\n            }\n        }\n    }\n}',
);
