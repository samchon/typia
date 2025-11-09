import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertEqualsFunctionAsyncCustom_ArrayRecursive =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "ArrayRecursive",
    )(ArrayRecursive)((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
