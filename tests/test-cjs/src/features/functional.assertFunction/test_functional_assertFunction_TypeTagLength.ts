import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertFunction_TypeTagLength = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertFunction(p),
  );
