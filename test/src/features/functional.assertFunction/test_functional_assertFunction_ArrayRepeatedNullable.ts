import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_assertFunction_ArrayRepeatedNullable =
  _test_functional_assertFunction(TypeGuardError)("ArrayRepeatedNullable")(
    ArrayRepeatedNullable,
  )((p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) =>
    typia.functional.assertFunction(p),
  );
