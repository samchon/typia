import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ArrayHierarchical = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.assertParameters(p),
)