import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalValueUnion = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)