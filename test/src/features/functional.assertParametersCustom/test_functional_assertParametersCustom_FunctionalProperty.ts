import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertParametersCustom_FunctionalProperty =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("FunctionalProperty")(
      FunctionalProperty,
    )((p: (input: FunctionalProperty) => FunctionalProperty) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
