import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsParametersAsync_FunctionalValue =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "FunctionalValue",
  )(FunctionalValue)(
    (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
      typia.functional.assertEqualsParameters(p),
  );
