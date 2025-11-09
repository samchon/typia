import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "FunctionalTuple",
    )(FunctionalTuple)(
      (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
