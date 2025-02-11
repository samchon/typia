import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertEqualsReturn_ArrayRecursive =
  _test_functional_assertEqualsReturn(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertEqualsReturn(p),
  );
