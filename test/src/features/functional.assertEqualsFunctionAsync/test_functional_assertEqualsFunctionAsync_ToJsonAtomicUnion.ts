import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_assertEqualsFunctionAsync_ToJsonAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ToJsonAtomicUnion",
    )(ToJsonAtomicUnion)(
      (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
        typia.functional.assertEqualsFunction(p),
    );
