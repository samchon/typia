import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_compare_equals_DynamicSimple = _test_compare_equals(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)((a, b) => typia.compare.equals<DynamicSimple>(a, b));
