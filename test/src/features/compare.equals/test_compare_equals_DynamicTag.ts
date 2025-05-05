import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_compare_equals_DynamicTag = _test_compare_equals(
    "DynamicTag",
)<DynamicTag>(
    DynamicTag
)((a, b) => typia.compare.equals<DynamicTag>(a, b));
