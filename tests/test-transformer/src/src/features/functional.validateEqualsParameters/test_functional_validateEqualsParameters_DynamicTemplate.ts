import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateEqualsParameters_DynamicTemplate = (): void => _test_functional_validateEqualsParameters(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => DynamicTemplate) => typia.functional.validateEqualsParameters(p),
)