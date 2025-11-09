import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateEqualsReturnAsync_DynamicUnion = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.validateEqualsReturn(p),
)