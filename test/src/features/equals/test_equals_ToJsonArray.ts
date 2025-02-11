import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_equals_ToJsonArray = _test_equals(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)((input) => typia.equals<ToJsonArray>(input));
