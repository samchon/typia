import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_compare_equals_DynamicEnumeration = _test_compare_equals(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)((a, b) => typia.compare.equals<DynamicEnumeration>(a, b));
