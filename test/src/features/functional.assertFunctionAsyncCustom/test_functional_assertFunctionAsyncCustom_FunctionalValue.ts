import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertFunctionAsyncCustom_FunctionalValue =
  _test_functional_assertFunctionAsync(CustomGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
