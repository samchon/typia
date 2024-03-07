import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ToJsonNull =
  _test_functional_assertParametersAsync(CustomGuardError)("ToJsonNull")(
    ToJsonNull,
  )((p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
