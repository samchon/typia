import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertEqualsFunctionAsyncCustom_AtomicIntersection =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "AtomicIntersection",
  )(AtomicIntersection)(
    (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
