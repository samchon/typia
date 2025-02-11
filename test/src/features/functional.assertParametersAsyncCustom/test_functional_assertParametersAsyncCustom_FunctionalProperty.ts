import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertParametersAsyncCustom_FunctionalProperty =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "FunctionalProperty",
  )(FunctionalProperty)(
    (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
