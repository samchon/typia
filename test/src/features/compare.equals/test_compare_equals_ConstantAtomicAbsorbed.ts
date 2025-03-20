import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_compare_equals_ConstantAtomicAbsorbed = _test_compare_equals(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)((a, b) => typia.compare.equals<ConstantAtomicAbsorbed>(a, b));
