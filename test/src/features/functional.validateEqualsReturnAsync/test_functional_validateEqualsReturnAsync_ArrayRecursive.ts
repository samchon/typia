import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateEqualsReturnAsync_ArrayRecursive =
  _test_functional_validateEqualsReturnAsync("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
      typia.functional.validateEqualsReturn(p),
  );
