import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertParameters_TypeTagDefault = (): void =>
  _test_functional_assertParameters(TypeGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertParameters(p),
  );
