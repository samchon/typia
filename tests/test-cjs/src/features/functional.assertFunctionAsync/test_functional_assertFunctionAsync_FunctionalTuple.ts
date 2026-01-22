import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertFunctionAsync_FunctionalTuple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("FunctionalTuple")(
      FunctionalTuple,
    )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
      typia.functional.assertFunction(p),
    );
