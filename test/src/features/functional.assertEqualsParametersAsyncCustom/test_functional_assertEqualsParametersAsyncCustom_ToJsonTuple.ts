import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ToJsonTuple = _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)