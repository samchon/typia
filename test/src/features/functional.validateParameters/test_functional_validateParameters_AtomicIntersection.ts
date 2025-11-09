import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateParameters_AtomicIntersection = (): void => _test_functional_validateParameters(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => AtomicIntersection) => typia.functional.validateParameters(p),
)