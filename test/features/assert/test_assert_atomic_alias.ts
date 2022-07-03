import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert } from "./_test_assert";

export const test_assert_atomic_alias = _test_assert(
    "generic alias",
    AtomicAlias.generate,
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
