import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_compare_equals_ToJsonDouble = _test_compare_equals(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)((a, b) => typia.compare.equals<ToJsonDouble>(a, b));
