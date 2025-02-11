import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_isFunction_ConstantEnumeration = _test_functional_isFunction(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => ConstantEnumeration) => typia.functional.isFunction(p),
)