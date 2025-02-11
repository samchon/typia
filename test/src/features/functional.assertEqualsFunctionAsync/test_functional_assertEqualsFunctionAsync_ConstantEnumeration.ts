import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ConstantEnumeration = _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.assertEqualsFunction(p),
)