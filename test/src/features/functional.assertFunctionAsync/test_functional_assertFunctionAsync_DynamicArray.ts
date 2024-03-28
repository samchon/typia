import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_assertFunctionAsync_DynamicArray =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicArray")(
    DynamicArray,
  )((p: (input: DynamicArray) => Promise<DynamicArray>) =>
    typia.functional.assertFunction(p),
  );
