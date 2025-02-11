import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_FunctionalTuple = _test_functional_assertFunctionAsync(TypeGuardError)(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.assertFunction(p),
)