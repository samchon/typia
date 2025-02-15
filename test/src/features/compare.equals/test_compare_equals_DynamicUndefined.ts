import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_compare_equals_DynamicUndefined = _test_compare_equals(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)((a, b) => typia.compare.equals<DynamicUndefined>(a, b));
