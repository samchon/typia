import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ArrayHierarchicalPointer = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ArrayHierarchicalPointer"
)(ArrayHierarchicalPointer)(
  (p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)