import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ConstantAtomicTagged = _test_assertEquals(CustomGuardError)(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)((input) => typia.assertEquals<ConstantAtomicTagged>(input, (p) => new CustomGuardError(p)));
