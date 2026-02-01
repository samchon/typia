import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateFunction_DynamicUnion = (): void => _test_functional_validateFunction(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => DynamicUnion) => typia.functional.validateFunction(p),
)