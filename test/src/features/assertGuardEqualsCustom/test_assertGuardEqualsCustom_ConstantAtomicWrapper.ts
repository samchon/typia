import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_assertGuardEqualsCustom_ConstantAtomicWrapper =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
    typia.assertGuardEquals<ConstantAtomicWrapper>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
