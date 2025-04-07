import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_compare_equals_TupleOptional = _test_compare_equals(
    "TupleOptional",
)<TupleOptional>(
    TupleOptional
)((a, b) => typia.compare.equals<TupleOptional>(a, b));
