import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_functional_value = _test_assert_type(
    "functional value",
    FunctionalValue.generate,
    (input) => TSON.assertType(input),
    // UNABLE TO SPOIL
);
