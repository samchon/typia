import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertFunctionAsync_FunctionalValue =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("FunctionalValue")(
      FunctionalValue,
    )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
      typia.functional.assertFunction(p),
    );
