import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertParametersCustom_FunctionalValue =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("FunctionalValue")(
      FunctionalValue,
    )((p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
