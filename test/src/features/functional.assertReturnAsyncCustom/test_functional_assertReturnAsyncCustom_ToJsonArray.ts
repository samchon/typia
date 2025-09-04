import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertReturnAsyncCustom_ToJsonArray =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ToJsonArray")(
      ToJsonArray,
    )((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
