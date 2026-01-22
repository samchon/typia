import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalPropertyUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "FunctionalPropertyUnion",
    )(FunctionalPropertyUnion)(
      (
        p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>,
      ) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
