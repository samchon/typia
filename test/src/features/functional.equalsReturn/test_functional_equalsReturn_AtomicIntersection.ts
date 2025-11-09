import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_equalsReturn_AtomicIntersection = (): void => _test_functional_equalsReturn(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => AtomicIntersection) => typia.functional.equalsReturn(p),
)