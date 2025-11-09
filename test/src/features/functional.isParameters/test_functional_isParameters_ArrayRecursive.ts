import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_isParameters_ArrayRecursive = (): void =>
  _test_functional_isParameters("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.isParameters(p),
  );
