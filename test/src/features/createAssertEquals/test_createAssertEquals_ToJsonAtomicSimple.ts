import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ToJsonAtomicSimple = (): void => _test_assertEquals(TypeGuardError)(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)(typia.createAssertEquals<ToJsonAtomicSimple>());
