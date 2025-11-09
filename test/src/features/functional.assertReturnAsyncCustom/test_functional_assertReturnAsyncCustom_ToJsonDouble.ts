import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertReturnAsyncCustom_ToJsonDouble =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ToJsonDouble")(
      ToJsonDouble,
    )((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
