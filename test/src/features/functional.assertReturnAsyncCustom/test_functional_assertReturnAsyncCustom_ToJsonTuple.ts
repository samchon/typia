import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertReturnAsyncCustom_ToJsonTuple =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ToJsonTuple")(
      ToJsonTuple,
    )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
