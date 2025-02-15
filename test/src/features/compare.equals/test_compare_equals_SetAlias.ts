import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { SetAlias } from "../../structures/SetAlias";

export const test_compare_equals_SetAlias = _test_compare_equals(
    "SetAlias",
)<SetAlias>(
    SetAlias
)((a, b) => typia.compare.equals<SetAlias>(a, b));
