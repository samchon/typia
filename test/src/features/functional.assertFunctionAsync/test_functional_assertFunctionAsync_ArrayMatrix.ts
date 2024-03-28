import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertFunctionAsync_ArrayMatrix =
  _test_functional_assertFunctionAsync(TypeGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.assertFunction(p),
  );
