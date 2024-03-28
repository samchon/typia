import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertParametersAsyncCustom_FunctionalValue =
  _test_functional_assertParametersAsync(CustomGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
