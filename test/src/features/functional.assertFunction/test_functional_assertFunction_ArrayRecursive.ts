import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertFunction_ArrayRecursive = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertFunction(p),
  );
