import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertFunctionAsync_FunctionalPropertyUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "FunctionalPropertyUnion",
    )(FunctionalPropertyUnion)(
      (
        p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>,
      ) => typia.functional.assertFunction(p),
    );
