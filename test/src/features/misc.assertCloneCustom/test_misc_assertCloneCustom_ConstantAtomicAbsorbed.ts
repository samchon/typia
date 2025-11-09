import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_assertCloneCustom_ConstantAtomicAbsorbed = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
    typia.misc.assertClone<ConstantAtomicAbsorbed>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
