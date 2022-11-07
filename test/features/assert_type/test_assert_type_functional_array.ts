import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_functional_array = _test_assert_type(
    "functional array",
    FunctionalArray.generate,
    (input) => TSON.assertType(input),
    FunctionalArray.SPOILERS,
);
