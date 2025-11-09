import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ConstantAtomicWrapper = (): void => _test_assert(CustomGuardError)(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)((input) => typia.assert<ConstantAtomicWrapper>(input, (p) => new CustomGuardError(p)));
