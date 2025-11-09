import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_DynamicUnion = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertReturn(p),
)