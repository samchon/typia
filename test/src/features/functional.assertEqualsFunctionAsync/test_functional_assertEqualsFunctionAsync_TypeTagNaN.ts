import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsFunctionAsync_TypeTagNaN =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertEqualsFunction(p),
  );
