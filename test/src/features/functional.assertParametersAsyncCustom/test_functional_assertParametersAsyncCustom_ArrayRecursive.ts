import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertParametersAsyncCustom_ArrayRecursive =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ArrayRecursive")(
      ArrayRecursive,
    )((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
