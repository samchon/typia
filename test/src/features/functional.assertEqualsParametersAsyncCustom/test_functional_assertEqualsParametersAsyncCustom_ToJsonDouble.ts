import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsParametersAsyncCustom_ToJsonDouble =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ToJsonDouble",
  )(ToJsonDouble)((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
