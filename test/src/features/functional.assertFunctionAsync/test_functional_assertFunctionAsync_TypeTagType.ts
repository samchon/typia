import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertFunctionAsync_TypeTagType =
  _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertFunction(p),
  );
