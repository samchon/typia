import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_FunctionalArrayUnion = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)