import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_DynamicUnion = _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertEqualsReturn(p),
)