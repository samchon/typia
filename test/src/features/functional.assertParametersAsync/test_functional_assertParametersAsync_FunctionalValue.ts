import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertParametersAsync_FunctionalValue =
  _test_functional_assertParametersAsync(TypeGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.assertParameters(p),
  );
