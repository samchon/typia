import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_isReturn_DynamicEnumeration = _test_functional_isReturn(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => DynamicEnumeration) => typia.functional.isReturn(p),
)