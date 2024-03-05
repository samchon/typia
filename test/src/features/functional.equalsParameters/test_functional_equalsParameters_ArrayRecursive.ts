import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_equalsParameters_ArrayRecursive =
  _test_functional_equalsParameters("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.equalsParameters(p),
  );
