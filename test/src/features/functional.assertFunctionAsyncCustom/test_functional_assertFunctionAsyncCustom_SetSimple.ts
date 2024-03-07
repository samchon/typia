import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { SetSimple } from "../../structures/SetSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_SetSimple =
  _test_functional_assertFunctionAsync(CustomGuardError)("SetSimple")(
    SetSimple,
  )((p: (input: SetSimple) => Promise<SetSimple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
