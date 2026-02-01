import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_equalsFunctionAsync_DynamicTemplate = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.equalsFunction(p),
)