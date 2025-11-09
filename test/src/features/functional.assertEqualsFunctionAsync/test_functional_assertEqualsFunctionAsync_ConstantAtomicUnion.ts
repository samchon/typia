import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertEqualsFunctionAsync_ConstantAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ConstantAtomicUnion",
    )(ConstantAtomicUnion)(
      (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
        typia.functional.assertEqualsFunction(p),
    );
