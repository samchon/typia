import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertParametersAsync_ToJsonArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ToJsonArray")(
      ToJsonArray,
    )((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.assertParameters(p),
    );
