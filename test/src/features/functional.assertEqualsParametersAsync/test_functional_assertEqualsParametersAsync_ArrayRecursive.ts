import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertEqualsParametersAsync_ArrayRecursive =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ArrayRecursive",
  )(ArrayRecursive)((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertEqualsParameters(p),
  );
