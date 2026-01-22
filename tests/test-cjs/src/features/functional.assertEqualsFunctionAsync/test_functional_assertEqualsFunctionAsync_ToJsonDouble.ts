import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsFunctionAsync_ToJsonDouble =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ToJsonDouble")(
      ToJsonDouble,
    )((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      typia.functional.assertEqualsFunction(p),
    );
