import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateEqualsParametersAsync_DynamicTemplate = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.validateEqualsParameters(p),
)