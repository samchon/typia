import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_assertFunctionAsyncCustom_ArrayHierarchicalPointer =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )(ArrayHierarchicalPointer)(
    (
      p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>,
    ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
