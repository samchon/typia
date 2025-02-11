import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_equalsFunctionAsync_AtomicIntersection = _test_functional_equalsFunctionAsync(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.equalsFunction(p),
)