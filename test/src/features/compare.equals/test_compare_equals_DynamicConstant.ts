import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_compare_equals_DynamicConstant = _test_compare_equals(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)((a, b) => typia.compare.equals<DynamicConstant>(a, b));
