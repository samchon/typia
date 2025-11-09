import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ConstantAtomicTagged = (): void => _test_misc_assertClone(CustomGuardError)(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.misc.createAssertClone<ConstantAtomicTagged>((p) => new CustomGuardError(p)));
