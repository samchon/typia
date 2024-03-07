import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ArrayRepeatedOptional =
  _test_functional_assertFunctionAsync(TypeGuardError)("ArrayRepeatedOptional")(
    ArrayRepeatedOptional,
  )((p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
    typia.functional.assertFunction(p),
  );
