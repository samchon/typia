import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert } from "./_test_assert";

export const test_assert_functional_property = _test_assert(
    "functional property",
    FunctionalProperty.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.name = 3 as any;
            return "$input.name";
        },
        (input) => {
            input.closure = "function" as any;
            return "$input.closure";
        },
        (input) => {
            input.closure = null!;
            return "$input.closure";
        },
        (input) => {
            input.closure = undefined!;
            return "$input.closure";
        },
        (input) => {
            input.closure = {} as any;
            return "$input.closure";
        },
        (input) => {
            input.closure = [] as any;
            return "$input.closure";
        },
    ],
);
