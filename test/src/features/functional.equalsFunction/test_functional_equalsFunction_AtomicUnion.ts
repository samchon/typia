import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_equalsFunction_AtomicUnion = (): void => _test_functional_equalsFunction(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => AtomicUnion) => typia.functional.equalsFunction(p),
)