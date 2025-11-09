import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_isFunction_ArrayRecursiveUnionExplicitPointer = (): void => _test_functional_isFunction(
  "ArrayRecursiveUnionExplicitPointer"
)(ArrayRecursiveUnionExplicitPointer)(
  (p: (input: ArrayRecursiveUnionExplicitPointer) => ArrayRecursiveUnionExplicitPointer) => typia.functional.isFunction(p),
)