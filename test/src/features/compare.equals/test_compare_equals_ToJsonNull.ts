import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_compare_equals_ToJsonNull = _test_compare_equals(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)((a, b) => typia.compare.equals<ToJsonNull>(a, b));
