import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_array_hierarchical = _test_assert_clone(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.assertClone(input),
    ArrayHierarchical.SPOILERS,
);
