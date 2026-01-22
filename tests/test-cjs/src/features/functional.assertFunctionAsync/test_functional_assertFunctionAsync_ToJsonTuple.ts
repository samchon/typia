import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertFunctionAsync_ToJsonTuple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ToJsonTuple")(
      ToJsonTuple,
    )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.assertFunction(p),
    );
