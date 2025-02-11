import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertReturnAsync_AtomicIntersection =
  _test_functional_assertReturnAsync(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.assertReturn(p),
  );
