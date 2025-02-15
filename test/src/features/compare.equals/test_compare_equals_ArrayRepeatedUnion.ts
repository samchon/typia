import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_compare_equals_ArrayRepeatedUnion = _test_compare_equals(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)((a, b) => typia.compare.equals<ArrayRepeatedUnion>(a, b));
