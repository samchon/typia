import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ConstantAtomicSimple = (): void => _test_misc_assertClone(CustomGuardError)(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(
    ConstantAtomicSimple
)(typia.misc.createAssertClone<ConstantAtomicSimple>((p) => new CustomGuardError(p)));
