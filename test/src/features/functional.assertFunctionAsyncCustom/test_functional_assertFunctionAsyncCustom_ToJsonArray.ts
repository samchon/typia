import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ToJsonArray =
  _test_functional_assertFunctionAsync(CustomGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
