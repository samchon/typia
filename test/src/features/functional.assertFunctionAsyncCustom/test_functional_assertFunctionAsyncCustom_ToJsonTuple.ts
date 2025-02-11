import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ToJsonTuple = _test_functional_assertFunctionAsync(CustomGuardError)(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)