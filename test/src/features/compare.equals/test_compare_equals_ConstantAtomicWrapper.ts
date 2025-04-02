import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_compare_equals_ConstantAtomicWrapper = _test_compare_equals(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)((a, b) => typia.compare.equals<ConstantAtomicWrapper>(a, b));
