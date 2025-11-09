import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertEqualsFunctionAsync_AtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("AtomicUnion")(
      AtomicUnion,
    )((p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
      typia.functional.assertEqualsFunction(p),
    );
