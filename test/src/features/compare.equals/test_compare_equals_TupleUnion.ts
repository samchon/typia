import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_compare_equals_TupleUnion = _test_compare_equals(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)((a, b) => typia.compare.equals<TupleUnion>(a, b));
