import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ArrayRepeatedOptional =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ArrayRepeatedOptional",
  )(ArrayRepeatedOptional)(
    (p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
