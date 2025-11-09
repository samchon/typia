import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalArrayUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "FunctionalArrayUnion",
    )(FunctionalArrayUnion)(
      (p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
