import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsParametersCustom_FunctionalValue =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "FunctionalValue",
    )(FunctionalValue)((p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
