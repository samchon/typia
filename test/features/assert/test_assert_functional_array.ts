import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert } from "./_test_assert";

export const test_assert_functional_array = _test_assert(
    "functional array",
    FunctionalArray.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0] = null!;
            return "$input[0]";
        },
        (input) => {
            input[0] = undefined!;
            return "$input[0]";
        },
        (input) => {
            input[0] = "string" as any;
            return "$input[0]";
        },
        (input) => {
            input[0] = {} as any;
            return "$input[0]";
        },
        (input) => {
            input[0] = [] as any;
            return "$input[0]";
        },
    ],
);
