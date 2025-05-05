import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_compare_equals_ToJsonAtomicUnion = _test_compare_equals(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)((a, b) => typia.compare.equals<ToJsonAtomicUnion>(a, b));
