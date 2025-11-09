import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertEqualsFunctionAsync_FunctionalArray =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "FunctionalArray",
    )(FunctionalArray)(
      (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
        typia.functional.assertEqualsFunction(p),
    );
