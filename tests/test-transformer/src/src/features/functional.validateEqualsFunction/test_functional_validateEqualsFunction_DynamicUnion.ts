import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateEqualsFunction_DynamicUnion = (): void => _test_functional_validateEqualsFunction(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => DynamicUnion) => typia.functional.validateEqualsFunction(p),
)