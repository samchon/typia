import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateParameters_ArrayRecursive =
  _test_functional_validateParameters("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.validateParameters(p),
  );
