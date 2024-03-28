import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertParametersAsync_AtomicIntersection =
  _test_functional_assertParametersAsync(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.assertParameters(p),
  );
