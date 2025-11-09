import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_equalsFunction_TypeTagAtomicUnion = (): void => _test_functional_equalsFunction(
  "TypeTagAtomicUnion"
)(TypeTagAtomicUnion)(
  (p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) => typia.functional.equalsFunction(p),
)