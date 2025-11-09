import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_AtomicIntersection = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => AtomicIntersection) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)