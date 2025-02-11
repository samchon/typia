import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_UltimateUnion = _test_functional_assertFunctionAsync(TypeGuardError)(
  "UltimateUnion"
)(UltimateUnion)(
  (p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.assertFunction(p),
)