import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayUnion = _test_message(
    "ArrayUnion",
    typia.message<ArrayUnion>(),
    `syntax = \"proto3\";

message __Main {
    repeated Array.Element_lt__lp_Array_lt_boolean_gt__space__or__space_Array_lt_number_gt__space__or__space_Array_lt_string_gt__rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp_Array_lt_boolean_gt__space__or__space_Array_lt_number_gt__space__or__space_Array_lt_string_gt__rp__gt_ {
        oneof value {
            Array.Element_lt_string_gt_ o0 = 1;
            Array.Element_lt_boolean_gt_ o1 = 2;
            Array.Element_lt_number_gt_ o2 = 3;
        }
    }

    message Element_lt_string_gt_ {
        string value = 1;
    }

    message Element_lt_boolean_gt_ {
        bool value = 1;
    }

    message Element_lt_number_gt_ {
        double value = 1;
    }
}`
);