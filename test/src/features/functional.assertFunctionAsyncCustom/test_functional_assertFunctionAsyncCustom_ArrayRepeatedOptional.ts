import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_assertFunctionAsyncCustom_ArrayRepeatedOptional =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ArrayRepeatedOptional",
    )(ArrayRepeatedOptional)(
      (p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
