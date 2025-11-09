import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ConstantEnumeration = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => ConstantEnumeration) => typia.functional.assertEqualsReturn(p),
)