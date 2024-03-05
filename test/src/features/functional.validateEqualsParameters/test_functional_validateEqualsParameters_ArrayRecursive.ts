import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateEqualsParameters_ArrayRecursive =
  _test_functional_validateEqualsParameters("ArrayRecursive")(ArrayRecursive)(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      typia.functional.validateEqualsParameters(p),
  );
