import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertFunctionCustom_ArrayRecursive =
  _test_functional_assertFunction(CustomGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
