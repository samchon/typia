import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertFunctionAsync_ArrayUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("ArrayUnion")(
    ArrayUnion,
  )((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.assertFunction(p),
  );
