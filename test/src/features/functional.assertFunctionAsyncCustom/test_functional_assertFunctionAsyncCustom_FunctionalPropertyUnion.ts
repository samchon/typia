import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertFunctionAsyncCustom_FunctionalPropertyUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "FunctionalPropertyUnion",
    )(FunctionalPropertyUnion)(
      (
        p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
