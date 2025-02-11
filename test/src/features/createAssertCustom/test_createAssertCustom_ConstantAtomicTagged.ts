import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ConstantAtomicTagged = _test_assert(CustomGuardError)(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.createAssert<ConstantAtomicTagged>((p) => new CustomGuardError(p)));
