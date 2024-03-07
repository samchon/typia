import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_AtomicIntersection =
  _test_functional_assertParametersAsync(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.assertParameters(p),
  );
