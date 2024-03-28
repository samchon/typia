import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_assertCloneCustom_ConstantAtomicUnion =
  _test_misc_assertClone(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    typia.misc.assertClone<ConstantAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
