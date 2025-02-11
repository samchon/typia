import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ToJsonDouble = _test_functional_assertFunctionAsync(TypeGuardError)(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.assertFunction(p),
)