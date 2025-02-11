import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_equalsReturn_ConstantEnumeration = _test_functional_equalsReturn(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => ConstantEnumeration) => typia.functional.equalsReturn(p),
)