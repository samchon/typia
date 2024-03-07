import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_FunctionalPropertyUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "FunctionalPropertyUnion",
  )(FunctionalPropertyUnion)(
    (p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
