import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ConstantEnumeration = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => ConstantEnumeration) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)