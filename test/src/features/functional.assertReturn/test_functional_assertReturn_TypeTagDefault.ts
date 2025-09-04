import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertReturn_TypeTagDefault = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertReturn(p),
  );
