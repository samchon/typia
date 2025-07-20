import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertFunctionAsyncCustom_ArrayHierarchical =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ArrayHierarchical")(
      ArrayHierarchical,
    )((p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
