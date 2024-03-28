import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_assertCloneCustom_ConstantAtomicWrapper =
  _test_misc_assertClone(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
    typia.misc.assertClone<ConstantAtomicWrapper>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
