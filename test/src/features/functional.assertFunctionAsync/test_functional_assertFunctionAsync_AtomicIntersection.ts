import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_AtomicIntersection =
  _test_functional_assertFunctionAsync(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.assertFunction(p),
  );
