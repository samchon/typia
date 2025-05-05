import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_compare_equals_TupleRestAtomic = _test_compare_equals(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((a, b) => typia.compare.equals<TupleRestAtomic>(a, b));
