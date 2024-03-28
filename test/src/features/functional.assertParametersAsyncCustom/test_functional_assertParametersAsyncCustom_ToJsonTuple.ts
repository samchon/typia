import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertParametersAsyncCustom_ToJsonTuple =
  _test_functional_assertParametersAsync(CustomGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
