import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { SetUnion } from "../../structures/SetUnion";

export const test_compare_equals_SetUnion = _test_compare_equals(
    "SetUnion",
)<SetUnion>(
    SetUnion
)((a, b) => typia.compare.equals<SetUnion>(a, b));
