import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_createAssertCloneCustom_ConstantAtomicWrapper =
  _test_misc_assertClone(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.misc.createAssertClone<ConstantAtomicWrapper>(
      (p) => new CustomGuardError(p),
    ),
  );
