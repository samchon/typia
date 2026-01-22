import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_assertFunctionCustom_ArrayRepeatedNullable =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ArrayRepeatedNullable")(
      ArrayRepeatedNullable,
    )((p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
