import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsFunctionAsync_TypeTagRange =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.assertEqualsFunction(p),
  );
