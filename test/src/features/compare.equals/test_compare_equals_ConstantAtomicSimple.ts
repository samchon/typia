import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_compare_equals_ConstantAtomicSimple = _test_compare_equals(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(
    ConstantAtomicSimple
)((a, b) => typia.compare.equals<ConstantAtomicSimple>(a, b));
