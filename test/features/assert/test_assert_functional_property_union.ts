import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_functional_property_union = _test_assert_for_of(
    "functional union property",
    FunctionalPropertyUnion.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.closure = {} as any;
            return "$input";
        },
        (input) => {
            input.closure = [] as any;
            return "$input";
        },
    ],
);
