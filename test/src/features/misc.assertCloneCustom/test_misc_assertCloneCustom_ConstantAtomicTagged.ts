import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ConstantAtomicTagged =
  _test_misc_assertClone(CustomGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
    typia.misc.assertClone<ConstantAtomicTagged>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
