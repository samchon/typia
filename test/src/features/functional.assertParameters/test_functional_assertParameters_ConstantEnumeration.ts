import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ConstantEnumeration = _test_functional_assertParameters(TypeGuardError)(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => ConstantEnumeration) => typia.functional.assertParameters(p),
)