import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalArray =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "FunctionalArray",
  )(FunctionalArray)(
    (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
