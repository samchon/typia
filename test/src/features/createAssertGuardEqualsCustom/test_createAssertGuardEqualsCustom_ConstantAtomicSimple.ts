import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ConstantAtomicSimple = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(
    ConstantAtomicSimple
)(typia.createAssertGuardEquals<ConstantAtomicSimple>((p) => new CustomGuardError(p)));
