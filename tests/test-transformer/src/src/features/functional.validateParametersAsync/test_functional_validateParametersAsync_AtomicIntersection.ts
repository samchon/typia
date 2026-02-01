import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateParametersAsync_AtomicIntersection = (): Promise<void> => _test_functional_validateParametersAsync(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
    typia.functional.validateParameters(p),
)