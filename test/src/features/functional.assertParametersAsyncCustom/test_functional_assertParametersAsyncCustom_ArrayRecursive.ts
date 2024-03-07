import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArrayRecursive =
  _test_functional_assertParametersAsync(CustomGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
