import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_isParametersAsync_DynamicNever = (): Promise<void> => _test_functional_isParametersAsync(
  "DynamicNever"
)(DynamicNever)(
  (p: (input: DynamicNever) => Promise<DynamicNever>) =>
    typia.functional.isParameters(p),
)