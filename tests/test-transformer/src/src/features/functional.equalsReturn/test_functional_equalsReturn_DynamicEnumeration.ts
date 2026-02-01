import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_equalsReturn_DynamicEnumeration = (): void => _test_functional_equalsReturn(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => DynamicEnumeration) => typia.functional.equalsReturn(p),
)