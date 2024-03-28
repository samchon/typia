import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertFunctionAsync_ArrayAny =
  _test_functional_assertFunctionAsync(TypeGuardError)("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => Promise<ArrayAny>) =>
      typia.functional.assertFunction(p),
  );
