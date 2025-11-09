import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateParametersAsync_DynamicTemplate = (): Promise<void> => _test_functional_validateParametersAsync(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.validateParameters(p),
)