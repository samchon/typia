import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsParametersAsyncCustom_FunctionalValue =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "FunctionalValue",
    )(FunctionalValue)(
      (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
