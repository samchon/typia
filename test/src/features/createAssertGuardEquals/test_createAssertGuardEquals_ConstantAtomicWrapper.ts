import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ConstantAtomicWrapper = _test_assertGuardEquals(TypeGuardError)(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)(typia.createAssertGuardEquals<ConstantAtomicWrapper>());
