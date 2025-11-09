import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayHierarchicalPointer = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ArrayHierarchicalPointer"
)(ArrayHierarchicalPointer)(
  (p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>) =>
    typia.functional.assertReturn(p),
)