import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_validateFunction_ArrayAtomicAlias = (): void => _test_functional_validateFunction(
  "ArrayAtomicAlias"
)(ArrayAtomicAlias)(
  (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) => typia.functional.validateFunction(p),
)