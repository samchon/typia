import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_equals_ConstantAtomicWrapper = (): void => _test_equals(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)((input) => typia.equals<ConstantAtomicWrapper>(input));
