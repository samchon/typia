import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_equalsParametersAsync_AtomicIntersection =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("AtomicIntersection")(
      AtomicIntersection,
    )((p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.equalsParameters(p),
    );
