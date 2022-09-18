import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_array_hierarchical = _test_assert_equals(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.assertEquals(input),
);
