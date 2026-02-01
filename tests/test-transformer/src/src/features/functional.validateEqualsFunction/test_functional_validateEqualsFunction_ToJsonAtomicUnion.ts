import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_validateEqualsFunction_ToJsonAtomicUnion = (): void => _test_functional_validateEqualsFunction(
  "ToJsonAtomicUnion"
)(ToJsonAtomicUnion)(
  (p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) => typia.functional.validateEqualsFunction(p),
)