import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertParametersAsyncCustom_ToJsonArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ToJsonArray")(
      ToJsonArray,
    )((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
