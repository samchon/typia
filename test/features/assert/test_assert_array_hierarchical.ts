import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert } from "./_test_assert";

export const test_assert_array_hierarchical = _test_assert(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.assertType(input),
);
