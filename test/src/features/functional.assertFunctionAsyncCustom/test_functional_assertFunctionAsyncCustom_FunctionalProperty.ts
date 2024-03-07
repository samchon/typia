import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_FunctionalProperty =
  _test_functional_assertFunctionAsync(CustomGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
