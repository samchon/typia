import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertParametersAsyncCustom_SetAlias =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("SetAlias")(
      SetAlias,
    )((p: (input: SetAlias) => Promise<SetAlias>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
