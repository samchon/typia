import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_compare_equals_TupleRestObject = _test_compare_equals(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)((a, b) => typia.compare.equals<TupleRestObject>(a, b));
