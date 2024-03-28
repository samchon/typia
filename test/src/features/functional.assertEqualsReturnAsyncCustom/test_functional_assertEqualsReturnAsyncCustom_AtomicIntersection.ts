import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertEqualsReturnAsyncCustom_AtomicIntersection =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "AtomicIntersection",
  )(AtomicIntersection)(
    (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
