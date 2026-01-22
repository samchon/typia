import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateEqualsReturnAsync_AtomicIntersection =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("AtomicIntersection")(
      AtomicIntersection,
    )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.validateEqualsReturn(p),
    );
