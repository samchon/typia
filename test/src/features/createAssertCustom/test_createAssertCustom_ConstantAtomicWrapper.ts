import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ConstantAtomicWrapper = _test_assert(CustomGuardError)(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)(typia.createAssert<ConstantAtomicWrapper>((p) => new CustomGuardError(p)));
