import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsFunctionAsync_TypeTagType =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertEqualsFunction(p),
  );
