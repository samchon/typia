import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateEqualsFunction_ArrayRecursive = (): void =>
  _test_functional_validateEqualsFunction("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.validateEqualsFunction(p),
  );
