import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_assertParametersAsyncCustom_SetUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("SetUnion")(
      SetUnion,
    )((p: (input: SetUnion) => Promise<SetUnion>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
