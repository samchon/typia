import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertFunctionAsync_ToJsonDouble =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ToJsonDouble")(
      ToJsonDouble,
    )((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      typia.functional.assertFunction(p),
    );
