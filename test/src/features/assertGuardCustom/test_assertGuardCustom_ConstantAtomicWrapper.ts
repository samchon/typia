import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_assertGuardCustom_ConstantAtomicWrapper = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
    typia.assertGuard<ConstantAtomicWrapper>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
