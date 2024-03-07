import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ConstantAtomicWrapper = _test_assertGuard(
  CustomGuardError,
)("ConstantAtomicWrapper")<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
  (input) =>
    typia.assertGuard<ConstantAtomicWrapper>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
