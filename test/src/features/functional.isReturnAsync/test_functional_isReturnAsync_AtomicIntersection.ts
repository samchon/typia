import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_isReturnAsync_AtomicIntersection =
  _test_functional_isReturnAsync("AtomicIntersection")(AtomicIntersection)(
    (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      typia.functional.isReturn(p),
  );
