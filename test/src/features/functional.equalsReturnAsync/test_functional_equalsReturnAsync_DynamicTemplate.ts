import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_equalsReturnAsync_DynamicTemplate = (): Promise<void> => _test_functional_equalsReturnAsync(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.equalsReturn(p),
)