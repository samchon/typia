import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_equalsParameters_AtomicIntersection = (): void => _test_functional_equalsParameters(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => AtomicIntersection) => typia.functional.equalsParameters(p),
)