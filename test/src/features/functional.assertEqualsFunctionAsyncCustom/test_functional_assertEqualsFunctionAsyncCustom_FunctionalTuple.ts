import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalTuple =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "FunctionalTuple",
  )(FunctionalTuple)(
    (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
