import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsParametersAsync_FunctionalTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "FunctionalTuple",
    )(FunctionalTuple)(
      (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
        typia.functional.assertEqualsParameters(p),
    );
