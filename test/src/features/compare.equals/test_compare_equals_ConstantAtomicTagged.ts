import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_compare_equals_ConstantAtomicTagged = _test_compare_equals(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)((a, b) => typia.compare.equals<ConstantAtomicTagged>(a, b));
