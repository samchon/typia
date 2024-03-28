import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertFunctionAsyncCustom_ArrayRecursive =
  _test_functional_assertFunctionAsync(CustomGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
