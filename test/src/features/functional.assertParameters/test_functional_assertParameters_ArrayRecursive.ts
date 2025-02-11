import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertParameters_ArrayRecursive =
  _test_functional_assertParameters(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertParameters(p),
  );
