import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagArray } from "../../../structures/TagArray";

export const test_message_TagArray = _test_message(
    "TagArray",
    'syntax = "proto3";\n\nmessage TagArray {\n    message Type {\n        repeated string items = 1;\n        repeated double minItems = 2;\n        repeated Array.Element_lt__lp_number_space__or__space_string_rp__gt_ maxItems = 3;\n        repeated string both = 4;\n    }\n}\n\nmessage Array {\n    message Element_lt__lp_number_space__or__space_string_rp__gt_ {\n        oneof value {\n            string value_o0 = 1;\n            double value_o1 = 2;\n        }\n    }\n}\n\nmessage __Main {\n    repeated TagArray.Type value = 1;\n}',
);
