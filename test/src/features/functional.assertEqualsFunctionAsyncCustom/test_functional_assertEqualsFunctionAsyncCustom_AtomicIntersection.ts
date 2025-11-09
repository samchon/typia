import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_AtomicIntersection = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)