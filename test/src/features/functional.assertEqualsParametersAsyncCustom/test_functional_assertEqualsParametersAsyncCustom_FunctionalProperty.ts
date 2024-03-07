import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_FunctionalProperty =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "FunctionalProperty",
  )(FunctionalProperty)(
    (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
