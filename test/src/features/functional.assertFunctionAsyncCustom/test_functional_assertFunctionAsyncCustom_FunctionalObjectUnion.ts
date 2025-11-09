import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_FunctionalObjectUnion = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "FunctionalObjectUnion"
)(FunctionalObjectUnion)(
  (p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)