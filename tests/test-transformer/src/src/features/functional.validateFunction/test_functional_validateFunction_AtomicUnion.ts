import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateFunction_AtomicUnion = (): void => _test_functional_validateFunction(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => AtomicUnion) => typia.functional.validateFunction(p),
)