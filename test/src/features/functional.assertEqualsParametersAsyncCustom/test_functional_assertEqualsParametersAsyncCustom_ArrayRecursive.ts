import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertEqualsParametersAsyncCustom_ArrayRecursive =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ArrayRecursive",
  )(ArrayRecursive)((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
