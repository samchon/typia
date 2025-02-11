import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_isReturn_DynamicSimple = _test_functional_isReturn(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => DynamicSimple) => typia.functional.isReturn(p),
)