import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertFunctionAsyncCustom_ArrayAny =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ArrayAny")(
      ArrayAny,
    )((p: (input: ArrayAny) => Promise<ArrayAny>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
