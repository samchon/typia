import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertEqualsFunctionCustom_ArrayRecursive =
  _test_functional_assertEqualsFunction(CustomGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
