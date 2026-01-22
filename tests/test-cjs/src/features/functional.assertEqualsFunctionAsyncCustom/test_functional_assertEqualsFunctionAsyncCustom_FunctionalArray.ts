import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalArray =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "FunctionalArray",
    )(FunctionalArray)(
      (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
