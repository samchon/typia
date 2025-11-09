import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ToJsonAtomicSimple = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)(typia.createAssertGuardEquals<ToJsonAtomicSimple>());
