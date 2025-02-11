import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ArrayHierarchicalPointer = _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ArrayHierarchicalPointer"
)(ArrayHierarchicalPointer)(
  (p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>) =>
    typia.functional.assertEqualsFunction(p),
)