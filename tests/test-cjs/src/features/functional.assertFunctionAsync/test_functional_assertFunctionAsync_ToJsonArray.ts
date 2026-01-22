import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertFunctionAsync_ToJsonArray =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ToJsonArray")(
      ToJsonArray,
    )((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.assertFunction(p),
    );
