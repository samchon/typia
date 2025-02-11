import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_isReturn_DynamicTree = _test_functional_isReturn(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => DynamicTree) => typia.functional.isReturn(p),
)