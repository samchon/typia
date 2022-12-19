import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_message } from "../internal/_test_message";

export const test_message_TagArray = _test_message(
    "TagArray",
    typia.message<TagArray>(),
    `syntax = \"proto3\";

message TagArray {
    message Type {
        repeated string items = 1;
        repeated number minItems = 2;
        repeated Array.Element_lt__lp_number_space__or__space_string_rp__gt_ maxItems = 3;
        repeated string both = 4;
    }
}

message Array {
    message Element_lt__lp_number_space__or__space_string_rp__gt_ {
        oneof value {
            string o0 = 1;
            double o1 = 2;
        }
    }
}

message __Main {
    repeated TagArray.Type value = 1;
}`
);