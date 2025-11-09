import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_isReturn_DynamicUnion = (): void => _test_functional_isReturn(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => DynamicUnion) => typia.functional.isReturn(p),
)