import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateFunction_ConstantEnumeration = (): void => _test_functional_validateFunction(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => ConstantEnumeration) => typia.functional.validateFunction(p),
)