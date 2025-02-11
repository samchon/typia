import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertEqualsFunctionAsync_AtomicIntersection =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "AtomicIntersection",
  )(AtomicIntersection)(
    (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.assertEqualsFunction(p),
  );
