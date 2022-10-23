import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_functional_value_union = _test_assert(
    "functional union value",
    FunctionalValueUnion.generate,
    (input) => TSON.assertType(input),
    FunctionalValueUnion.SPOILERS,
);
