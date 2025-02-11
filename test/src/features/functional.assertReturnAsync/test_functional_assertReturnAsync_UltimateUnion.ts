import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_UltimateUnion = _test_functional_assertReturnAsync(TypeGuardError)(
  "UltimateUnion"
)(UltimateUnion)(
  (p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.assertReturn(p),
)