import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ArrayHierarchicalPointer =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )(ArrayHierarchicalPointer)(
    (
      p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>,
    ) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
