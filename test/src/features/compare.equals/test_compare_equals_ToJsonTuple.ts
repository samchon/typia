import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_compare_equals_ToJsonTuple = _test_compare_equals(
    "ToJsonTuple",
)<ToJsonTuple>(
    ToJsonTuple
)((a, b) => typia.compare.equals<ToJsonTuple>(a, b));
