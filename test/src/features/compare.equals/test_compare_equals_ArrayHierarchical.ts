import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_compare_equals_ArrayHierarchical = _test_compare_equals(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)((a, b) => typia.compare.equals<ArrayHierarchical>(a, b));
