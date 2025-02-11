import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertEqualsFunction_ArrayRecursive =
  _test_functional_assertEqualsFunction(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertEqualsFunction(p),
  );
