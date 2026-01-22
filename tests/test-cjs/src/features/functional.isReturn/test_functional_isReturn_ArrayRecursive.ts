import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_isReturn_ArrayRecursive = (): void =>
  _test_functional_isReturn("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.isReturn(p),
  );
