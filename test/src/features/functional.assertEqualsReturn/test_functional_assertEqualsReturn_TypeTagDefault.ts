import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertEqualsReturn_TypeTagDefault = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertEqualsReturn(p),
  );
