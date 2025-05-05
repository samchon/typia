import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_compare_equals_DynamicUnion = _test_compare_equals(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)((a, b) => typia.compare.equals<DynamicUnion>(a, b));
