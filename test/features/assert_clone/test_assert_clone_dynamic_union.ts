import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_dynamic_union = _test_assert_clone(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.assertClone<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
