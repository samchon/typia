import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertReturnAsyncCustom_AtomicIntersection =
  _test_functional_assertReturnAsync(CustomGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
