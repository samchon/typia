import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ConstantAtomicTagged =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)(
    typia.createAssertGuardEquals<ConstantAtomicTagged>(
      (p) => new CustomGuardError(p),
    ),
  );
