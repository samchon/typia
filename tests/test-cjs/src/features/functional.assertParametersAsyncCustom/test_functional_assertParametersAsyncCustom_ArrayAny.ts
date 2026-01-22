import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertParametersAsyncCustom_ArrayAny =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ArrayAny")(
      ArrayAny,
    )((p: (input: ArrayAny) => Promise<ArrayAny>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
