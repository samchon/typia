import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_assertFunctionAsync_ArrayRepeatedRequired =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ArrayRepeatedRequired",
    )(ArrayRepeatedRequired)(
      (p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
        typia.functional.assertFunction(p),
    );
