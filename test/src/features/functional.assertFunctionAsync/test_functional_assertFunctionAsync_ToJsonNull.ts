import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertFunctionAsync_ToJsonNull =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ToJsonNull")(
      ToJsonNull,
    )((p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.assertFunction(p),
    );
