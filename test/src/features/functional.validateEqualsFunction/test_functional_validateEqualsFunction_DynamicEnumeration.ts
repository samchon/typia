import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateEqualsFunction_DynamicEnumeration = (): void => _test_functional_validateEqualsFunction(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => DynamicEnumeration) => typia.functional.validateEqualsFunction(p),
)