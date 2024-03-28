import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertParametersAsyncCustom_FunctionalTuple =
  _test_functional_assertParametersAsync(CustomGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
