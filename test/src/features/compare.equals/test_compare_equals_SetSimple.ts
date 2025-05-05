import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { SetSimple } from "../../structures/SetSimple";

export const test_compare_equals_SetSimple = _test_compare_equals(
    "SetSimple",
)<SetSimple>(
    SetSimple
)((a, b) => typia.compare.equals<SetSimple>(a, b));
