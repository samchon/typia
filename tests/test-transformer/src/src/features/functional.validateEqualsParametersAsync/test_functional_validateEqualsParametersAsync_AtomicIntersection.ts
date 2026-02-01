import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateEqualsParametersAsync_AtomicIntersection = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.validateEqualsParameters(p),
)