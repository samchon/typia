import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertParametersAsync_ArrayAny =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ArrayAny")(
      ArrayAny,
    )((p: (input: ArrayAny) => Promise<ArrayAny>) =>
      typia.functional.assertParameters(p),
    );
