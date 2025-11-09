import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateEqualsParametersAsync_ArrayRecursive =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ArrayRecursive")(
      ArrayRecursive,
    )((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
      typia.functional.validateEqualsParameters(p),
    );
