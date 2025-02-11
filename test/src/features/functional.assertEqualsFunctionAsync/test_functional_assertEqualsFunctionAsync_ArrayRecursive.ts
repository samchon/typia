import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertEqualsFunctionAsync_ArrayRecursive =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertEqualsFunction(p),
  );
