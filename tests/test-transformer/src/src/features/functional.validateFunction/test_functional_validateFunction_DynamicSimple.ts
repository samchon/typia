import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_validateFunction_DynamicSimple = (): void => _test_functional_validateFunction(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => DynamicSimple) => typia.functional.validateFunction(p),
)