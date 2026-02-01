import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_equalsReturnAsync_DynamicUnion = (): Promise<void> => _test_functional_equalsReturnAsync(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.equalsReturn(p),
)