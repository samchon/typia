import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateReturn_ArrayRecursive =
  _test_functional_validateReturn("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.validateReturn(p),
  );
