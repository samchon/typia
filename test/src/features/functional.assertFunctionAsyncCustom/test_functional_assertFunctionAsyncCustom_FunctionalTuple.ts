import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertFunctionAsyncCustom_FunctionalTuple =
  _test_functional_assertFunctionAsync(CustomGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
