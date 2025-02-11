import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_isParameters_DynamicTree = _test_functional_isParameters(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => DynamicTree) => typia.functional.isParameters(p),
)