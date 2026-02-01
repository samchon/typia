import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_equalsFunction_AtomicIntersection = (): void => _test_functional_equalsFunction(
  "AtomicIntersection"
)(AtomicIntersection)(
  (p: (input: AtomicIntersection) => AtomicIntersection) => typia.functional.equalsFunction(p),
)