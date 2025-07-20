import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_equalsReturnAsync_ArrayRecursive =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ArrayRecursive")(ArrayRecursive)(
      (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
        typia.functional.equalsReturn(p),
    );
