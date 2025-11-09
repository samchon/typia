import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_equals_TupleHierarchical = (): void => _test_equals(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.equals<TupleHierarchical>(input));
