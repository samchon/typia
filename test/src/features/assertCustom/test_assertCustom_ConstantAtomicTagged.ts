import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ConstantAtomicTagged = _test_assert(CustomGuardError)(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)((input) => typia.assert<ConstantAtomicTagged>(input, (p) => new CustomGuardError(p)));
