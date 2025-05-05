import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_compare_equals_ArrayRepeatedRequired = _test_compare_equals(
    "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(
    ArrayRepeatedRequired
)((a, b) => typia.compare.equals<ArrayRepeatedRequired>(a, b));
