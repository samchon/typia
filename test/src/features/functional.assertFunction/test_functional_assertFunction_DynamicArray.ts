import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_assertFunction_DynamicArray =
  _test_functional_assertFunction(TypeGuardError)("DynamicArray")(DynamicArray)(
    (p: (input: DynamicArray) => DynamicArray) =>
      typia.functional.assertFunction(p),
  );
