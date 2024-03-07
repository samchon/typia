import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateReturnAsync_ArrayRecursive =
  _test_functional_validateReturnAsync("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
      typia.functional.validateReturn(p),
  );
