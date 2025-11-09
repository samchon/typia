import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ConstantAtomicTagged = (): void => _test_assertEquals(TypeGuardError)(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.createAssertEquals<ConstantAtomicTagged>());
