import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_isParametersAsync_DynamicTemplate = _test_functional_isParametersAsync(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.isParameters(p),
)