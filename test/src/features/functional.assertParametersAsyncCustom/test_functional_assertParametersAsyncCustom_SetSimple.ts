import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_assertParametersAsyncCustom_SetSimple =
  _test_functional_assertParametersAsync(CustomGuardError)("SetSimple")(
    SetSimple,
  )((p: (input: SetSimple) => Promise<SetSimple>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
