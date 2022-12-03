import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_ConstantAtomicUnion = _test_message(
    "ConstantAtomicUnion",
    TSON.message<ConstantAtomicUnion>(),
    `syntax = \"proto3\";

message __type {
    string key = 1;
}

message __Main {
    repeated Array.Element_lt__lp__doublequote_four_doublequote__space__or__space__doublequote_three_doublequote__space__or__space_1_space__or__space_2_space__or__space___type_space__or__space_false_rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp__doublequote_four_doublequote__space__or__space__doublequote_three_doublequote__space__or__space_1_space__or__space_2_space__or__space___type_space__or__space_false_rp__gt_ {
        oneof value {
            bool o0 = 1;
            uint32 o1 = 2;
            string o2 = 3;
            __type o3 = 4;
        }
    }
}`,
);
