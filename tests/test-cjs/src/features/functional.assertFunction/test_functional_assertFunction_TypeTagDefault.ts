import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertFunction_TypeTagDefault = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertFunction(p),
  );
