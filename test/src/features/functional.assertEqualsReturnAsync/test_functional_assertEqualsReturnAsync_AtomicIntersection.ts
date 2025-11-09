import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertEqualsReturnAsync_AtomicIntersection =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "AtomicIntersection",
    )(AtomicIntersection)(
      (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
        typia.functional.assertEqualsReturn(p),
    );
