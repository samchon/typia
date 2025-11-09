import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ToJsonNull = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.assertEqualsFunction(p),
)