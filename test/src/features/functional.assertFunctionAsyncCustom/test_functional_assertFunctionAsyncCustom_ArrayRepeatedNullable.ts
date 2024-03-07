import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ArrayRepeatedNullable =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ArrayRepeatedNullable",
  )(ArrayRepeatedNullable)(
    (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
