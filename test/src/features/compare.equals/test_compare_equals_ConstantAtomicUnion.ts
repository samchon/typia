import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_compare_equals_ConstantAtomicUnion = _test_compare_equals(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)((a, b) => typia.compare.equals<ConstantAtomicUnion>(a, b));
