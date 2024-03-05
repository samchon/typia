import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_validateFunction_ArrayRepeatedNullable =
  _test_functional_validateFunction("ArrayRepeatedNullable")(
    ArrayRepeatedNullable,
  )((p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) =>
    typia.functional.validateFunction(p),
  );
