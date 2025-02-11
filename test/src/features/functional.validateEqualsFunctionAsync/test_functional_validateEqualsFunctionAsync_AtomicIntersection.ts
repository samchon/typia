import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateEqualsFunctionAsync_AtomicIntersection =
  _test_functional_validateEqualsFunctionAsync("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.validateEqualsFunction(p),
  );
