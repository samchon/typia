import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_AtomicIntersection = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => AtomicIntersection) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)