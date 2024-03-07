import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_TypeTagDefault =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.assertEqualsFunction(p),
  );
