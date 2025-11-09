import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsReturnAsyncCustom_ToJsonNull =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("ToJsonNull")(
      ToJsonNull,
    )((p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
