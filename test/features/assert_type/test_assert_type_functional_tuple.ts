import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_functional_tuple = _test_assert_type(
    "functional tuple",
    FunctionalTuple.generate,
    (input) => TSON.assertType(input),
    FunctionalTuple.SPOILERS,
);
