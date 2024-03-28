import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertReturn_ArrayRecursive =
  _test_functional_assertReturn(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertReturn(p),
  );
