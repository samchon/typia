import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_isReturnAsync_ArrayRecursive = (): Promise<void> =>
  _test_functional_isReturnAsync("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
      typia.functional.isReturn(p),
  );
