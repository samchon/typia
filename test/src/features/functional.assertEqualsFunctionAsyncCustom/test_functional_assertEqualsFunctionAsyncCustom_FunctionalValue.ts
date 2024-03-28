import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalValue =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "FunctionalValue",
  )(FunctionalValue)(
    (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
