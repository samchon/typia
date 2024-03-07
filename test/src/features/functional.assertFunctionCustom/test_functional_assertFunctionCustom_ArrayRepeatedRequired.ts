import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArrayRepeatedRequired =
  _test_functional_assertFunction(CustomGuardError)("ArrayRepeatedRequired")(
    ArrayRepeatedRequired,
  )((p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
