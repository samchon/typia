import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_assertFunctionAsync_ArrayRepeatedNullable =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ArrayRepeatedNullable",
    )(ArrayRepeatedNullable)(
      (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
        typia.functional.assertFunction(p),
    );
