import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateFunctionAsync_DynamicTemplate = (): Promise<void> => _test_functional_validateFunctionAsync(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.validateFunction(p),
)