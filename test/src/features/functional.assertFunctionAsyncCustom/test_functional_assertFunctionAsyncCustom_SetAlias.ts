import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertFunctionAsyncCustom_SetAlias =
  _test_functional_assertFunctionAsync(CustomGuardError)("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => Promise<SetAlias>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
