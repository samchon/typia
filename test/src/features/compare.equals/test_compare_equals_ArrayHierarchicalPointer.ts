import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_compare_equals_ArrayHierarchicalPointer = _test_compare_equals(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)((a, b) => typia.compare.equals<ArrayHierarchicalPointer>(a, b));
