import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_isFunction_ArrayAtomicAlias = (): void => _test_functional_isFunction(
  "ArrayAtomicAlias"
)(ArrayAtomicAlias)(
  (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) => typia.functional.isFunction(p),
)