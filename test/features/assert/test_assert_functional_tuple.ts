import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assert } from "./_test_assert";

export const test_assert_functional_tuple = _test_assert(
    "functional tuple",
    FunctionalTuple.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0] = null!;
            return "$input[0]";
        },
        (input) => {
            input[1] = undefined!;
            return "$input[1]";
        },
        (input) => {
            input[2] = {} as any;
            return "$input[2]";
        },
        (input) => {
            input[0] = false as any;
            return "$input[0]";
        },
        (input) => {
            input[1] = 1 as any;
            return "$input[1]";
        },
        (input) => {
            input[2] = "string" as any;
            return "$input[2]";
        },
    ],
);
