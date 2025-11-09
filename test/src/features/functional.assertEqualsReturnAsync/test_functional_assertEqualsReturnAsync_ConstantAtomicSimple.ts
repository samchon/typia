import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ConstantAtomicSimple = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "ConstantAtomicSimple"
)(ConstantAtomicSimple)(
  (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
    typia.functional.assertEqualsReturn(p),
)