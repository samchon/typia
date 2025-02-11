import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertFunctionAsyncCustom_ToJsonNull =
  _test_functional_assertFunctionAsync(CustomGuardError)("ToJsonNull")(
    ToJsonNull,
  )((p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
