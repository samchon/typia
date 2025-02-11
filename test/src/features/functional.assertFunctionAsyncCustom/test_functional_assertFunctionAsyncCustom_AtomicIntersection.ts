import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertFunctionAsyncCustom_AtomicIntersection =
  _test_functional_assertFunctionAsync(CustomGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
