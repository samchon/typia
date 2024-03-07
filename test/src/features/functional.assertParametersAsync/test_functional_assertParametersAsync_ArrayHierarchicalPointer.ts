import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ArrayHierarchicalPointer =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )(ArrayHierarchicalPointer)(
    (
      p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>,
    ) => typia.functional.assertParameters(p),
  );
