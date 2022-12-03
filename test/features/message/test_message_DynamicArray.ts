import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicArray = _test_message(
    "DynamicArray",
    TSON.message<DynamicArray>(),
    `syntax = \"proto3\";

message __Main {
    map<string, Object.Value_lt_Array_lt_string_gt__gt_> value = 1;
}

message Object {
    message Value_lt_Array_lt_string_gt__gt_ {
        repeated string value = 1;
    }
}`,
);
