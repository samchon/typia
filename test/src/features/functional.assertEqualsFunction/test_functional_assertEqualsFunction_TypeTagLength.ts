import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsFunction_TypeTagLength = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertEqualsFunction(p),
  );
