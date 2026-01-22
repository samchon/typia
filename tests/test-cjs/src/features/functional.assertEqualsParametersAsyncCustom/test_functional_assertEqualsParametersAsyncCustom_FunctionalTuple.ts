import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsParametersAsyncCustom_FunctionalTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "FunctionalTuple",
    )(FunctionalTuple)(
      (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
