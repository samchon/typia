import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertEqualsParametersAsyncCustom_FunctionalValueUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "FunctionalValueUnion",
  )(FunctionalValueUnion)(
    (p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
