import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_functional_array_union = _test_assert_for_of(
    "functional union array",
    FunctionalArrayUnion.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0] = undefined!;
            return "$input";
        },
        (input) => {
            input[0] = {} as any;
            return "$input";
        },
        (input) => {
            input[0] = [] as any;
            return "$input";
        },
    ],
);
