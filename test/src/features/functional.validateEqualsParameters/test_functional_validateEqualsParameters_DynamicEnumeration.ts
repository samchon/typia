import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateEqualsParameters_DynamicEnumeration = (): void => _test_functional_validateEqualsParameters(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => DynamicEnumeration) => typia.functional.validateEqualsParameters(p),
)