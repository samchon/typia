import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_compare_equals_ToJsonArray = _test_compare_equals(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)((a, b) => typia.compare.equals<ToJsonArray>(a, b));
