import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_UltimateUnion = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "UltimateUnion"
)(UltimateUnion)(
  (p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)