import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_atomic_simple = _test_assert(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0] = 0 as any;
            return "$input[0]";
        },
        (input) => {
            input[1] = "one" as any;
            return "$input[1]";
        },
        (input) => {
            input[2] = 2 as any;
            return "$input[2]";
        },
    ],
);
