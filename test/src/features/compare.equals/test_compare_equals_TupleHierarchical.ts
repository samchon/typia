import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_compare_equals_TupleHierarchical = _test_compare_equals(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((a, b) => typia.compare.equals<TupleHierarchical>(a, b));
