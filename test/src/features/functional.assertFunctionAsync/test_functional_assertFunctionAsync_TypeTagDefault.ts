import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertFunctionAsync_TypeTagDefault =
  _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.assertFunction(p),
  );
