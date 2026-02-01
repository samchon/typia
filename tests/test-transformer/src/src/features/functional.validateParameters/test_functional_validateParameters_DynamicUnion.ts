import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateParameters_DynamicUnion = (): void => _test_functional_validateParameters(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => DynamicUnion) => typia.functional.validateParameters(p),
)