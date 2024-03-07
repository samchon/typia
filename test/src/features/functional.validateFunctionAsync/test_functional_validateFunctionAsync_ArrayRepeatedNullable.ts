import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_validateFunctionAsync_ArrayRepeatedNullable =
  _test_functional_validateFunctionAsync("ArrayRepeatedNullable")(
    ArrayRepeatedNullable,
  )((p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
    typia.functional.validateFunction(p),
  );
