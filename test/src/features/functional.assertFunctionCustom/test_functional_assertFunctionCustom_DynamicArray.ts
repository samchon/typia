import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_assertFunctionCustom_DynamicArray =
  _test_functional_assertFunction(CustomGuardError)("DynamicArray")(
    DynamicArray,
  )((p: (input: DynamicArray) => DynamicArray) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
