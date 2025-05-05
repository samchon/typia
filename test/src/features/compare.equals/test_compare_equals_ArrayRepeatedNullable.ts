import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_compare_equals_ArrayRepeatedNullable = _test_compare_equals(
    "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(
    ArrayRepeatedNullable
)((a, b) => typia.compare.equals<ArrayRepeatedNullable>(a, b));
