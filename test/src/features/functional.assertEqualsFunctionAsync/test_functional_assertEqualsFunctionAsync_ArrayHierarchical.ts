import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ArrayHierarchical = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.assertEqualsFunction(p),
)