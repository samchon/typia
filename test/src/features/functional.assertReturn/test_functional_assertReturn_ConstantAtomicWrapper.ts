import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ConstantAtomicWrapper = (): void => _test_functional_assertReturn(TypeGuardError)(
  "ConstantAtomicWrapper"
)(ConstantAtomicWrapper)(
  (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) => typia.functional.assertReturn(p),
)