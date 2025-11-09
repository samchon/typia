import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateReturnAsync_AtomicIntersection =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("AtomicIntersection")(
      AtomicIntersection,
    )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.validateReturn(p),
    );
