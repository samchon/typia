import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ArrayRepeatedNullable =
  _test_functional_assertReturn(TypeGuardError)("ArrayRepeatedNullable")(
    ArrayRepeatedNullable,
  )((p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) =>
    typia.functional.assertReturn(p),
  );
