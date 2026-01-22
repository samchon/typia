import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createAssertCustom_ConstantAtomicTagged = (): void =>
  _test_assert(CustomGuardError)("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )(typia.createAssert<ConstantAtomicTagged>((p) => new CustomGuardError(p)));
