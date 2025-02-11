import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertFunctionAsync_AtomicIntersection =
  _test_functional_assertFunctionAsync(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.assertFunction(p),
  );
