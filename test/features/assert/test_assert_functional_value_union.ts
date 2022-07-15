import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_functional_value_union = _test_assert_for_of(
    "functional union value",
    FunctionalValueUnion.generate,
    (input) => TSON.assertType(input),
    // UNABLE TO SPOIL
);
