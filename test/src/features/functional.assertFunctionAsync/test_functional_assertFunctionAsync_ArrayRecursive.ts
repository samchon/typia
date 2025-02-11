import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertFunctionAsync_ArrayRecursive =
  _test_functional_assertFunctionAsync(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertFunction(p),
  );
