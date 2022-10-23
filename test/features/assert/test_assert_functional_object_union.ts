import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_functional_object_union = _test_assert(
    "functional union object",
    FunctionalObjectUnion.generate,
    (input) => TSON.assertType(input),
    FunctionalObjectUnion.SPOILERS,
);
