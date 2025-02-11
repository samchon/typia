import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_assertFunctionAsync_ArrayRepeatedUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("ArrayRepeatedUnion")(
    ArrayRepeatedUnion,
  )((p: (input: ArrayRepeatedUnion) => Promise<ArrayRepeatedUnion>) =>
    typia.functional.assertFunction(p),
  );
