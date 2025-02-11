import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_assertGuardEqualsCustom_ConstantAtomicTagged =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
    typia.assertGuardEquals<ConstantAtomicTagged>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
