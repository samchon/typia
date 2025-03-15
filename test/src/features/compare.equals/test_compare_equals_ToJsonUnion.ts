import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_compare_equals_ToJsonUnion = _test_compare_equals(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)((a, b) => typia.compare.equals<ToJsonUnion>(a, b));
