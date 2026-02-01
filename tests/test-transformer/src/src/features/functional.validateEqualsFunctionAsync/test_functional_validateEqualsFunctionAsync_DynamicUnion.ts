import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateEqualsFunctionAsync_DynamicUnion = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.validateEqualsFunction(p),
)