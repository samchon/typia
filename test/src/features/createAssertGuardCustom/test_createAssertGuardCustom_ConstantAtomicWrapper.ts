import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createAssertGuardCustom_ConstantAtomicWrapper =
  _test_assertGuard(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.createAssertGuard<ConstantAtomicWrapper>(
      (p) => new CustomGuardError(p),
    ),
  );
