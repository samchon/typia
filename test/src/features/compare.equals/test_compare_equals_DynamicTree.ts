import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_compare_equals_DynamicTree = _test_compare_equals(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)((a, b) => typia.compare.equals<DynamicTree>(a, b));
