import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertEqualsParametersAsync_AtomicIntersection =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "AtomicIntersection",
  )(AtomicIntersection)(
    (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.assertEqualsParameters(p),
  );
