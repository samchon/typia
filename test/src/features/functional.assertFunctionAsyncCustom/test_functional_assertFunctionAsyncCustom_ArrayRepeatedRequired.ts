import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_assertFunctionAsyncCustom_ArrayRepeatedRequired =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ArrayRepeatedRequired",
  )(ArrayRepeatedRequired)(
    (p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
