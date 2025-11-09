import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ConstantAtomicAbsorbed = (): void => _test_assert(CustomGuardError)(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)(typia.createAssert<ConstantAtomicAbsorbed>((p) => new CustomGuardError(p)));
