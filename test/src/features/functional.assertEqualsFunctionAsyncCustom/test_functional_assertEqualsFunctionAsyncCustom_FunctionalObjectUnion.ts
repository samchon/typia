import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalObjectUnion = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "FunctionalObjectUnion"
)(FunctionalObjectUnion)(
  (p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)