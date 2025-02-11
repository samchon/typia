import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_equalsReturn_ArrayAtomicAlias = _test_functional_equalsReturn(
  "ArrayAtomicAlias"
)(ArrayAtomicAlias)(
  (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) => typia.functional.equalsReturn(p),
)