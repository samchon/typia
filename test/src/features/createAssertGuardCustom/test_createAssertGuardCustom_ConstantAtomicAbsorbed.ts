import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ConstantAtomicAbsorbed = (): void => _test_assertGuard(CustomGuardError)(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)(typia.createAssertGuard<ConstantAtomicAbsorbed>((p) => new CustomGuardError(p)));
