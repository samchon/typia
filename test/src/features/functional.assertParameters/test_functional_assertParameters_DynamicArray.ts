import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_assertParameters_DynamicArray =
  _test_functional_assertParameters(TypeGuardError)("DynamicArray")(
    DynamicArray,
  )((p: (input: DynamicArray) => DynamicArray) =>
    typia.functional.assertParameters(p),
  );
