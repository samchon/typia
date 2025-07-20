import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertParametersAsync_ToJsonNull =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ToJsonNull")(
      ToJsonNull,
    )((p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.assertParameters(p),
    );
