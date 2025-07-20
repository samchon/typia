import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertParametersAsync_ToJsonTuple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ToJsonTuple")(
      ToJsonTuple,
    )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.assertParameters(p),
    );
