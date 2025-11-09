import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_equalsFunction_DynamicEnumeration = (): void => _test_functional_equalsFunction(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => DynamicEnumeration) => typia.functional.equalsFunction(p),
)