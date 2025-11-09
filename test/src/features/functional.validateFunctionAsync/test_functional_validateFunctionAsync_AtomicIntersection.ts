import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateFunctionAsync_AtomicIntersection =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("AtomicIntersection")(
      AtomicIntersection,
    )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.validateFunction(p),
    );
