import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_isReturn_ToJsonAtomicUnion = (): void => _test_functional_isReturn(
  "ToJsonAtomicUnion"
)(ToJsonAtomicUnion)(
  (p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) => typia.functional.isReturn(p),
)