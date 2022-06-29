import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assert } from "./_test_assert";

export const test_assert_functional_value = _test_assert(
    "functional value",
    FunctionalValue.generate,
    (input) => TSON.assertType(input),
);
