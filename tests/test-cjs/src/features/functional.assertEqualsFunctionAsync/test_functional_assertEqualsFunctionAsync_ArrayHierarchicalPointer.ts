import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_assertEqualsFunctionAsync_ArrayHierarchicalPointer =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ArrayHierarchicalPointer",
    )(ArrayHierarchicalPointer)(
      (
        p: (
          input: ArrayHierarchicalPointer,
        ) => Promise<ArrayHierarchicalPointer>,
      ) => typia.functional.assertEqualsFunction(p),
    );
