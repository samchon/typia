import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_equalsReturn_ArrayAtomicSimple = (): void => _test_functional_equalsReturn(
  "ArrayAtomicSimple"
)(ArrayAtomicSimple)(
  (p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) => typia.functional.equalsReturn(p),
)