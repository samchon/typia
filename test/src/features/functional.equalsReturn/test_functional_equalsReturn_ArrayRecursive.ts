import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_equalsReturn_ArrayRecursive =
  _test_functional_equalsReturn("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.equalsReturn(p),
  );
