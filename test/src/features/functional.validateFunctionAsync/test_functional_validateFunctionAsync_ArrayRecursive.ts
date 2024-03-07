import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateFunctionAsync_ArrayRecursive =
  _test_functional_validateFunctionAsync("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
      typia.functional.validateFunction(p),
  );
