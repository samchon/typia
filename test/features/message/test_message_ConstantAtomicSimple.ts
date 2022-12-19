import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_ConstantAtomicSimple = _test_message(
    "ConstantAtomicSimple",
    typia.message<ConstantAtomicSimple>(),
    `syntax = \"proto3\";

message __Main {
    [false, true, 2, \"three\"] value = 1;
}

message _alt_false_comma__space_true_comma__space_2_comma__space__doublequote_three_doublequote__agt_ {
    bool v0 = 1;
    bool v1 = 2;
    uint32 v2 = 3;
    string v3 = 4;
}`
);