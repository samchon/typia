import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertFunctionAsync_TypeTagNaN =
  _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertFunction(p),
  );
