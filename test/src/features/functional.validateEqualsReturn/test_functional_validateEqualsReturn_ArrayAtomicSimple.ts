import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_validateEqualsReturn_ArrayAtomicSimple = (): void => _test_functional_validateEqualsReturn(
  "ArrayAtomicSimple"
)(ArrayAtomicSimple)(
  (p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) => typia.functional.validateEqualsReturn(p),
)