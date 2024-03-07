import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_assertGuard_ConstantAtomicWrapper = _test_assertGuard(
  TypeGuardError,
)("ConstantAtomicWrapper")<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
  (input) => typia.assertGuard<ConstantAtomicWrapper>(input),
);
