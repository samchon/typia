import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ArrayHierarchicalPointer = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "ArrayHierarchicalPointer"
)(ArrayHierarchicalPointer)(
  (p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) => typia.functional.assertEqualsFunction(p),
)