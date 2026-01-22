import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_isParametersAsync_AtomicIntersection =
  (): Promise<void> =>
    _test_functional_isParametersAsync("AtomicIntersection")(
      AtomicIntersection,
    )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.isParameters(p),
    );
