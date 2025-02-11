import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_equalsParametersAsync_DynamicTemplate = _test_functional_equalsParametersAsync(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.equalsParameters(p),
)