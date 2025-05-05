import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_compare_equals_ArrayRecursive = _test_compare_equals(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)((a, b) => typia.compare.equals<ArrayRecursive>(a, b));
