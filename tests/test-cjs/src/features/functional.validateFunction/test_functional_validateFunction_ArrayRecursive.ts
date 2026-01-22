import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateFunction_ArrayRecursive = (): void =>
  _test_functional_validateFunction("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.validateFunction(p),
  );
