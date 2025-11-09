import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertEqualsParametersAsyncCustom_FunctionalObjectUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "FunctionalObjectUnion",
    )(FunctionalObjectUnion)(
      (p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
