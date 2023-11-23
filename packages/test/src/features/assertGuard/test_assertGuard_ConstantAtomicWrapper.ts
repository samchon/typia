import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_assertGuard_ConstantAtomicWrapper = _test_assertGuard(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
  typia.assertGuard<ConstantAtomicWrapper>(input),
);
