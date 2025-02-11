import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_isParametersAsync_DynamicSimple = _test_functional_isParametersAsync(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.isParameters(p),
)