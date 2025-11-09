import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertEqualsParametersAsyncCustom_ToJsonArray =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ToJsonArray",
    )(ToJsonArray)((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
