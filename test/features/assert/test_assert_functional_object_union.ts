import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_functional_object_union = _test_assert_for_of(
    "functional union object",
    FunctionalObjectUnion.generate,
    (input) => TSON.assertType(input),
);
