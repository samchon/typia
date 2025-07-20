import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertEqualsReturnAsync_ToJsonArray =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("ToJsonArray")(
      ToJsonArray,
    )((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.assertEqualsReturn(p),
    );
