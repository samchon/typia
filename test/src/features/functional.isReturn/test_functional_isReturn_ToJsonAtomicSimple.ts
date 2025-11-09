import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_isReturn_ToJsonAtomicSimple = (): void => _test_functional_isReturn(
  "ToJsonAtomicSimple"
)(ToJsonAtomicSimple)(
  (p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) => typia.functional.isReturn(p),
)