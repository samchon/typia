import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_equalsParametersAsync_ArrayRecursive =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ArrayRecursive")(ArrayRecursive)(
      (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
        typia.functional.equalsParameters(p),
    );
