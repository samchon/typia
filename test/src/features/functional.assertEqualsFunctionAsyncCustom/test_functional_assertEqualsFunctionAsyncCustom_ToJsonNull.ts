import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsFunctionAsyncCustom_ToJsonNull =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ToJsonNull")(
      ToJsonNull,
    )((p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
