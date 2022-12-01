import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_AtomicUnion = _test_message(
    "AtomicUnion",
    TSON.message<AtomicUnion>(),
    `syntax = \"proto3\";

message __Main {
    repeated Array.Element_lt__lp_boolean_space__or__space_null_space__or__space_number_space__or__space_string_rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp_boolean_space__or__space_null_space__or__space_number_space__or__space_string_rp__gt_ {
        oneof value {
            string o0 = 1;
            double o1 = 2;
            bool o2 = 3;
        }
    }
}`,
);
