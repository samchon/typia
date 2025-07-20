import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertReturnAsync_ArrayRecursive =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ArrayRecursive")(
      ArrayRecursive,
    )((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
      typia.functional.assertReturn(p),
    );
