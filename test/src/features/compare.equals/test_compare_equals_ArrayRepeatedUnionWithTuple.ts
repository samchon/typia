import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_compare_equals_ArrayRepeatedUnionWithTuple = _test_compare_equals(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple
)((a, b) => typia.compare.equals<ArrayRepeatedUnionWithTuple>(a, b));
