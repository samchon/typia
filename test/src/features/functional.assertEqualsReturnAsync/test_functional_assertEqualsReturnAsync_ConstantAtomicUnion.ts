import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertEqualsReturnAsync_ConstantAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ConstantAtomicUnion",
    )(ConstantAtomicUnion)(
      (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
        typia.functional.assertEqualsReturn(p),
    );
