import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_constant_atomic_union = _test_assert(
    "constant atomic",
    ConstantAtomicUnion.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0] = 3 as 1;
            return "$input[0]";
        },
        (input) => {
            input[1] = "two" as "three";
            return "$input[1]";
        },
        (input) => {
            input[2] = { key: "something" as "key" };
            return "$input[2].key";
        },
    ],
);
