import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ConstantAtomicWrapper = (): void => _test_assertGuard(CustomGuardError)(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)(typia.createAssertGuard<ConstantAtomicWrapper>((p) => new CustomGuardError(p)));
