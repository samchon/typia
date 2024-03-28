import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsFunctionAsync_TypeTagLength =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.assertEqualsFunction(p),
  );
