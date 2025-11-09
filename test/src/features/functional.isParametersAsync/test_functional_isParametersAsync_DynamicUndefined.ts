import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_isParametersAsync_DynamicUndefined = (): Promise<void> => _test_functional_isParametersAsync(
  "DynamicUndefined"
)(DynamicUndefined)(
  (p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
    typia.functional.isParameters(p),
)