import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ToJsonDouble = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)