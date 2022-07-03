import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_atomic_union = _test_assert(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0] = [] as any;
            return "$input";
        },
        (input) => {
            input[1] = {} as any;
            return "$input";
        },
        (input) => {
            input[2] = undefined!;
            return "$input";
        },
    ],
);
