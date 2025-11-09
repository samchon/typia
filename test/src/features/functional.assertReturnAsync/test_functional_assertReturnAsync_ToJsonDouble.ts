import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertReturnAsync_ToJsonDouble =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ToJsonDouble")(
      ToJsonDouble,
    )((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      typia.functional.assertReturn(p),
    );
