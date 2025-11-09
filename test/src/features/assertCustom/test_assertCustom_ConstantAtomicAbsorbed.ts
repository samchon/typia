import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ConstantAtomicAbsorbed = (): void => _test_assert(CustomGuardError)(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)((input) => typia.assert<ConstantAtomicAbsorbed>(input, (p) => new CustomGuardError(p)));
