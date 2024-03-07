import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ConstantAtomicWrapper =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.createAssertGuardEquals<ConstantAtomicWrapper>(
      (p) => new CustomGuardError(p),
    ),
  );
