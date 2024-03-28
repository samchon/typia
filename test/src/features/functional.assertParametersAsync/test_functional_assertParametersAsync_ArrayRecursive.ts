import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertParametersAsync_ArrayRecursive =
  _test_functional_assertParametersAsync(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertParameters(p),
  );
