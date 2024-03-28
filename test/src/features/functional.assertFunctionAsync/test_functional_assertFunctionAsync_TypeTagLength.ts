import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertFunctionAsync_TypeTagLength =
  _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.assertFunction(p),
  );
