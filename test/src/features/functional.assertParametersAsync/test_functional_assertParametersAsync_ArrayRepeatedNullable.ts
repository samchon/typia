import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_assertParametersAsync_ArrayRepeatedNullable =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ArrayRepeatedNullable",
  )(ArrayRepeatedNullable)(
    (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
      typia.functional.assertParameters(p),
  );
