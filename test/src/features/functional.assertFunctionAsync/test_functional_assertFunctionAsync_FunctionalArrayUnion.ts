import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_assertFunctionAsync_FunctionalArrayUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "FunctionalArrayUnion",
    )(FunctionalArrayUnion)(
      (p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
        typia.functional.assertFunction(p),
    );
