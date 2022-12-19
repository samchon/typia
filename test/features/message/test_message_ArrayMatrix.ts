import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayMatrix = _test_message(
    "ArrayMatrix",
    typia.message<ArrayMatrix>(),
    `syntax = \"proto3\";

message __Main {
    repeated Array.Element_lt_Array_lt_Array_lt_number_gt__gt__gt_ value = 1;
}

message Array {
    message Element_lt_Array_lt_Array_lt_number_gt__gt__gt_ {
        repeated Array.Element_lt_Array_lt_number_gt__gt_ value = 1;
    }

    message Element_lt_Array_lt_number_gt__gt_ {
        repeated number value = 1;
    }
}`
);