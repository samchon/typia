import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_assertParametersAsync_ArrayHierarchicalPointer =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ArrayHierarchicalPointer",
    )(ArrayHierarchicalPointer)(
      (
        p: (
          input: ArrayHierarchicalPointer,
        ) => Promise<ArrayHierarchicalPointer>,
      ) => typia.functional.assertParameters(p),
    );
