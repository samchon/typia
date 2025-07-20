import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_assertEqualsReturnAsyncCustom_ArrayHierarchicalPointer =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )(ArrayHierarchicalPointer)(
      (
        p: (
          input: ArrayHierarchicalPointer,
        ) => Promise<ArrayHierarchicalPointer>,
      ) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
