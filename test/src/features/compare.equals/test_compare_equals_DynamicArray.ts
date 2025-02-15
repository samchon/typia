import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_compare_equals_DynamicArray = _test_compare_equals(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)((a, b) => typia.compare.equals<DynamicArray>(a, b));
