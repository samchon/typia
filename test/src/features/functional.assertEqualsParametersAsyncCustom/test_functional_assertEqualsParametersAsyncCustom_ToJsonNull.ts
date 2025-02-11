import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsParametersAsyncCustom_ToJsonNull =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("ToJsonNull")(
    ToJsonNull,
  )((p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
