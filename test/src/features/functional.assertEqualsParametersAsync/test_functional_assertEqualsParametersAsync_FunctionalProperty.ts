import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertEqualsParametersAsync_FunctionalProperty =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "FunctionalProperty",
    )(FunctionalProperty)(
      (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
        typia.functional.assertEqualsParameters(p),
    );
