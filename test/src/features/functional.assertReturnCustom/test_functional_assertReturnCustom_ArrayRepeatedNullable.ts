import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_assertReturnCustom_ArrayRepeatedNullable =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)("ArrayRepeatedNullable")(
      ArrayRepeatedNullable,
    )((p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
