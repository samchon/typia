import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ArrayRepeatedNullable =
  _test_functional_assertReturn(CustomGuardError)("ArrayRepeatedNullable")(
    ArrayRepeatedNullable,
  )((p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
