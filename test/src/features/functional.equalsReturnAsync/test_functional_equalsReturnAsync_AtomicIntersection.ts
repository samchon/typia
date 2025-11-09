import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_equalsReturnAsync_AtomicIntersection = (): Promise<void> => _test_functional_equalsReturnAsync(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.equalsReturn(p),
)