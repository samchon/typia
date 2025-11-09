import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertEqualsReturnAsyncCustom_ToJsonTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("ToJsonTuple")(
      ToJsonTuple,
    )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
