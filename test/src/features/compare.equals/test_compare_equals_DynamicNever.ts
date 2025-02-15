import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_compare_equals_DynamicNever = _test_compare_equals(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)((a, b) => typia.compare.equals<DynamicNever>(a, b));
