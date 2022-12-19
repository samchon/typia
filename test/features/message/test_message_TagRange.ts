import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_message } from "../internal/_test_message";

export const test_message_TagRange = _test_message(
    "TagRange",
    typia.message<TagRange>(),
    `syntax = \"proto3\";

message TagRange {
    message Type {
        double minimum = 1;
        double maximum = 2;
        double minimum_and_maximum = 3;
        double greater = 4;
        double greater_equal = 5;
        double less = 6;
        double less_equal = 7;
        double greater_less = 8;
        double greater_equal_less = 9;
        double greater_less_equal = 10;
        double greater_equal_less_equal = 11;
    }
}

message __Main {
    repeated TagRange.Type value = 1;
}`
);