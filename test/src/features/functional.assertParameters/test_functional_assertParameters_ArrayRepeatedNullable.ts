import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_assertParameters_ArrayRepeatedNullable =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)("ArrayRepeatedNullable")(
      ArrayRepeatedNullable,
    )((p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) =>
      typia.functional.assertParameters(p),
    );
