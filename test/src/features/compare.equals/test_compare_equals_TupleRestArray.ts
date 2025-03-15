import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_compare_equals_TupleRestArray = _test_compare_equals(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((a, b) => typia.compare.equals<TupleRestArray>(a, b));
