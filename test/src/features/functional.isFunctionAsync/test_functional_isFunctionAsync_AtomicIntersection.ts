import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_isFunctionAsync_AtomicIntersection = (): Promise<void> => _test_functional_isFunctionAsync(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.isFunction(p),
)