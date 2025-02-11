import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_assertParametersAsync_ArrayRepeatedRequired =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ArrayRepeatedRequired",
  )(ArrayRepeatedRequired)(
    (p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
      typia.functional.assertParameters(p),
  );
