import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_compare_equals_ToJsonAtomicSimple = _test_compare_equals(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)((a, b) => typia.compare.equals<ToJsonAtomicSimple>(a, b));
